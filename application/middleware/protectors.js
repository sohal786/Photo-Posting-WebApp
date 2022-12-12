module.exports = {
    isLoggedIn : function(req, res, next){ 
        if(req.session.username){
            next();
        }else{
            
            req.session.save(function(saveError){
                res.redirect('/login');
                req.flash("error", `You must be logged in to Post`);
            })
        
        }
    },


    
        
        }
    
