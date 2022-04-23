// routes
const router = require('express').Router();

// Model
const fav = require('../Models/fav')

// Token 
const verifyToken = require('./validateToken')

// post favs
router.post('/favs', verifyToken, async (req, res) =>{

    try{
         const favReq = new fav({
         list : req.body.list,
         fav: req.body.fav,
         userEmail: req.body.userEmail 
         })

        const resList = await favReq.save();
    
        res.status(200).json({
          message : resList
        })
       }
     catch(e){
         console.log(e);
     }   
    
} )

module.exports = router;