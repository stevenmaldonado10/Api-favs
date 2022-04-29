// route
const router = require('express').Router();

// Model
const user = require('../Models/user')

// Bcrypt
const bcrypt = require('bcrypt');

// jsonWebToken
const jwt = require('jsonwebtoken');


// login
router.post('/login', async (req, res) =>{

    const validateUser = await user.findOne({email: req.body.email})
    if(!validateUser) return res.json({message:'Email no existe'})
    
    const validatePassword = await bcrypt.compare(req.body.password, validateUser.password)
    if(!validatePassword) return res.json({message:'Error en contraseña'})
    
    //token
    try{
    const token = jwt.sign({
          email : validateUser.email,
          id: validateUser._id
    }, process.env.TKN_SECRET)

       res.status(200).json({
          user: validateUser,
          token: token
    })
      }
    catch(e){
      res.status(400).json({
            email: req.body.email,
            password: req.body.password 
            })
      }
    })
 

module.exports = router;