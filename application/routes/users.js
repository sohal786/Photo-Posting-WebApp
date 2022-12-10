var express = require('express');
var router = express.Router();

<<<<<<< Updated upstream
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
=======


  db.query('select id, username, password from users where username =?', 
  [username])
    .then(function([results, fields]){
      if (results && results.length == 1){
        loggedUserId = results[0].id;
        loggedUsername = results[0].username;
        let dbPassword = results[0].password;
        return bcrypt.compare(password, dbPassword);

      }else{
        req.flash("error", "Invalid user credentials");
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
      req.flash("error", "Invalid user credentials");
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
    
>>>>>>> Stashed changes
});

module.exports = router;
