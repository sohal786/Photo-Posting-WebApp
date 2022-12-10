const express = require('express');
const router = express.Router();
const db = require('../conf/database');


router.post('/create', function(req, res, next){
    if (!req.session.userId){
        res.json({
            status: "error",
            message: "you must be longed in"
        });
    }else{
        let {comment, postId} = req.body;
        let {userId, username} = req.session;
        db.execute(`INSERT INTO comments(text, fk_authorId, fk_postId) value (?,?,?);`, [comment, userId, postId])
        .then(function([results, fields]){
            if (results && results.affectedRows === 1){
                res.json({
                    status:"success",
                    message:"comment created",
                    data: {
                        comment: comment,
                        username: username,
                        commentId: results.insertId
                
                    }
                })
               

            }else{
                res.json({
                    status: "error",
                    message:"comment cannot be created"
                })
            }
        })
    }
})



module.exports = router;