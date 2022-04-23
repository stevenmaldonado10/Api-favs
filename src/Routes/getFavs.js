// routes
const router = require('express').Router();

// Model
const fav = require('../Models/fav')

// Token 
const verifyToken = require('./validateToken')

// get favs

router.get('/favs', verifyToken, async (req, res) =>{

      
      try{
            const favs = await fav.find();
            res.status(200).json({
            message : favs
            })
         }
       catch(e){
          console.log(e);   
       }     
      
} )

module.exports = router;

