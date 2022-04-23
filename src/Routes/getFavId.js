// routes
const router = require('express').Router();

// Model
const fav = require('../Models/fav')

// Token 
const verifyToken = require('./validateToken')

// get fav id

router.get('/favs/:id', verifyToken, async (req, res) =>{

    try{
        const favId =  req.params.id
        const favSingle = await fav.findById({_id:favId})
    
        res.status(200).json({
          message : favSingle
        })
       }
    catch(e){
        console.log(e);
    }
        
    
} )

module.exports = router;