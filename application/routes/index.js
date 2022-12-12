var express = require('express');
const {isLoggedIn} = require('../middleware/protectors')
const {getRecentPosts, getPostById, getCommentsForPostById} = require('../middleware/posts')
var router = express.Router();

/* GET home page. */


router.get("/",  getRecentPosts, function(req, res, next) {
  res.render('index',{css:["style.css"], js:["viewpost.js"]});
});


router.get("/login", function(req, res) {
  res.render('login', {css:["style.css"],js:["loginValidation.js"]});
});
 //would use more like unique user name, email...
// router.use("/register", function(req, res, next){

//   if (`user info is valid`){
//     next(), js:["loginValidation.js"]
//   }
//   else{js:["loginValidation.js"]

//     res.json({message: `user info invalid`})
//   }

// })
//for errors, need to use next() for midwire
router.get("/register", function(req, res) {
   res.render('registration', {css:["style.css"], js:["validation.js"]});
});


// router.get("/postimage", function(req, res, next) {
//   if (`user is logged`){
//     next()
//   }
//   else{

//     res.json({message: `must log in to make a post`})
//   }
// });


router.get("/postimage",isLoggedIn, function(req, res) {
  res.render('postimage',{css:["style.css"]});
});

router.get("/posts/:id(\\d+)",isLoggedIn, getPostById ,getCommentsForPostById, function(req, res) {
  res.render('viewpost',{css:["style.css"], js:["viewpost.js"]})
});
module.exports = router;
