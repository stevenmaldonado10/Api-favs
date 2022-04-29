// routes
const router = require('express').Router();

// Model
const user = require('../Models/user')

// Bcrypt
const bcrypt = require('bcrypt');

// register
router.post('/register', async (req, res) =>{

      // validación antes de registrarse
      const validateEmail = await user.findOne({email: req.body.email})
      if(validateEmail) return res.json({message:'Email ya existe'})

        // hash
        const jump = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, jump);

        try{
            const userReq = new user({
              email : req.body.email,
              password : hash
            })
        
            const pru= await userReq.save();
       
            res.status(200).json({
           message: userReq
       })
          } 
        catch(e){
              console.log(e);
              
            }

})

module.exports = router;