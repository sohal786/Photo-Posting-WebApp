var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const UserError = require('../helpers/error/UserError');
const db = require('../conf/database');
const logoutMessage = require('../middleware/protectors');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//localhost:3000/users/register
router.post("/register", function(req, res, next){
  const {username, email, password} = req.body;
  
//server side validation
//check for duplicates
db.query('select id from users where username =?',
[username])
    .then(function([results, fields]){
      if(results && results.length == 0){
        return db.query('select id from users where email = ?',
        [email])
      }else{

          throw new UserError('username already exists');
               

      }
    }).then(function([results, fields]){
      if(results && results.length == 0){
        return bcrypt.hash(password, 2);
        
      }else{

          throw new Error('email already exists');
      } 
      }).then(function(hashedPassword){
        return db.execute('insert into users (username, email,password) value (?,?,?)', [username, email, hashedPassword])

      })
      
      
      
      
      
      
      .then(function([results, fields]){
      
        if(results && results.affectedRows == 1){

          req.flash("success", `Hi ${username}, you are now registered.`);
          req.session.save(function(saveErr){
          res.redirect('/login');
          })

        }else {

          throw new UserError('Failed Registration: Invalid  credentials', "/", 200);

        }
      
      
      
      
      }).catch(function(err){
        req.flash("error", `Username/ email already exists`);
         res.redirect('/register');
        
        next(err);
  //insert into db
  //respond to each
  });
    })

router.post("/login", function(req, res){
  const {username, password} = req.body;
  let loggedUserId;
  let loggedUsername;



  db.query('select id, username, password from users where username =?', 
  [username])
    .then(function([results, fields]){
      if (results && results.length == 1){
        loggedUserId = results[0].id;
        loggedUsername = results[0].username;
        let dbPassword = results[0].password;
        return bcrypt.compare(password, dbPassword);

      }else{
        req.flash("error", `Invalid user credentials`);
        throw new UserError('Failed Login: Invalid user credentials', "/login", 200);
    }
  })

  .then(function(passwordsMatched){
    if(passwordsMatched){
        req.session.userId = loggedUserId;
        req.session.username = loggedUsername;
        req.flash("success", `Hi ${loggedUsername}, you are now logged in.`);
        req.session.save(function(saveErr){
        res.redirect('/');
        })

    }else{
      req.flash("error", `Invalid user credentials`);
      throw new UserError('Failed Login: Invalid user credentials', "/login", 200);
    }

  }).catch(function(err){
    //res.redirect('/register');
    if(err instanceof UserError){
      req.flash("error", err.getMessage())
      req.session.save(function(saveError){
        res.redirect(err.getRedirectURL());
      })

    }
    else{next(err);}
    
});

})
router.post("/logout", function(req, res){

  req.session.destroy(function(destroyError){
    if(destroyError){
      
      next(err);
  }else{
    
      res.json({
          status:200,
          message: "you have been logged out"
      });
  }
  
})
})

module.exports = router;
