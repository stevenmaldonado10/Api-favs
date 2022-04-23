// routes
const router = require('express').Router();

// Model
const fav = require('../Models/fav')

// Token
const verifyToken = require('./validateToken')

// delete fav id

router.delete('/favs/:id', verifyToken, async (req, res) =>{

    try{  
      const favId = req.params.id;
      const favDelete  = await fav.deleteOne({ _id: favId })
    
      res.status(200).json({
          message : "document deleted"
      })
       }
    catch(e){
      console.log(e);
    }
    
} )

module.exports = router;