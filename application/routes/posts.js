const express = require('express');
const router  = express.Router();
const multer = require('multer');
const sharp = require('sharp');
const db = require('../conf/database');
const { getRecentPosts } = require('../middleware/posts');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/uploads')
    },
    filename: function (req, file, cb) {
      let fileExt = file.mimetype.split("/")[1];
      cb(null, `${file.fieldname}-${Date.now()}-${Math.round(Math.random() * 1E9)}.${fileExt}`)
    }
  })
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/tmp/my-uploads')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

const upload = multer({ storage: storage })
  
  //const upload = multer({ storage: storage })


router.post("/create", upload.single("uploadImage"), function(req, res, next){
    // console.log(req);
    // res.send();
  //})
    let uploadedFile = req.file.path;
    let thumbnailName = `thumbnail-${req.file.filename}`;
    let destinationofThumbnail = `${req.file.destination}/${thumbnailName}`;
    const {title, description} = req.body;
    const userId = req.session.userId;

    sharp(uploadedFile)
        .resize(200)
        .toFile(destinationofThumbnail)
        .then(function(){
            let baseSQL = `INSERT INTO posts (title, description, image, thumbnail, fk_authorId)
            VALUE(?,?,?,?,?)`
            return db.query(baseSQL, [title, description, uploadedFile, destinationofThumbnail, userId])
        })
          .then(function([results, fields]){
              
              req.session.save(function(saveErr){
                req.flash("success", "Your post has been created!");
                  res.redirect('/');
                  
              })

          })
        
        
        
        
            .catch(err=>next(err))
});
router.get("/search", function(req, res, next){
  let searchTerm = `%${req.query.searchTerm}%`;
  let originalSearchTerm = req.query.searchTerm;
  let baseSQL = `select 
  id, title, description, thumbnail, concat_ws(" ", title, description) as haystack
  FROM posts
  HAVING haystack like ?;`;
  db.execute(baseSQL, [searchTerm])
    .then(function([results, fields]){
      res.locals.results = results;
      res.locals.searchValue = originalSearchTerm;
      
      if(results.length == 0){
        req.flash("success", `${results.length} results found but here are some suggestions!`);
        db.query('select id, title, description, thumbnail from posts ORDER BY createdAt DESC LIMIT 10')
        .then(function([results, fields]){
            if(results && results.length){
                res.locals.results = results;
                req.session.save(function(saveErr){
                  res.render('index');
                })
                
            }
             

        })




      }
      else{
        req.flash("success", `${results.length} results found`);
      req.session.save(function(saveErr){
        res.render('index');
      })
    }
      
      }).catch(err=>next(err))
    
  
  })
    

module.exports = router;