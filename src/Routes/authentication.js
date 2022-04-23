
// routes
const router = require('express').Router();

// Model
const user = require('../Models/user')
const fav = require('../Models/fav')

// Bcrypt
const bcrypt = require('bcrypt');

// jsonWebToken
const jwt = require('jsonwebtoken');

// register
router.post('/register', async (req, res) =>{

      // validación antes de registrarse
      const validateEmail = await user.findOne({email: req.body.email})
      if(validateEmail) return res.json({message:'Email ya existe'})

        // hash
        const jump = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, jump);

        const userReq = new user({
              email : req.body.email,
              password : hash
        })
        
        const pru= await userReq.save();
       
        res.json({
           message: userReq
       })     
}  )


// login
router.post('/login', async (req, res) =>{

      const validateUser = await user.findOne({email: req.body.email})
      if(!validateUser) return res.json({message:'Email no existe'})
      
      const validatePassword = await bcrypt.compare(req.body.password, validateUser.password)
      if(!validatePassword) return res.json({message:'Error en contraseña'})
      
      //token
      const token = jwt.sign({
            email : validateUser.email,
            id: validateUser._id
      }, process.env.TKN_SECRET)

      res.json({
            user: validateUser,
            token: token
      })
        
}  )


// get favs

router.get('/favs', verifyToken, async (req, res) =>{

      const favs = await fav.find();
      res.json({
            message : favs
      })
      
} )



// post favs

router.post('/favs', verifyToken, async (req, res) =>{

      const favReq = new fav({
           list : req.body.list,
           fav: req.body.fav,
           email: req.body.email 
      })

      const resList = await favReq.save();
      
      res.json({
            message : resList
      })
      
} )


// get fav id

router.get('/favs/:id', verifyToken, async (req, res) =>{

      const favId =  req.params.id
      const favSingle = await fav.findById({favId})
      
      res.json({
            message : favSingle
      })
      
} )


// delete fav id

router.delete('/favs/:id', verifyToken, async (req, res) =>{

      const favId = req.params.id;
        const favDelete  = await fav.deleteOne({ _id: favId })
      
      res.json({
            message : favDelete
      })
      
} )

function verifyToken (req, res, next){

            const bearerHeader = req.headers['authorization'];
              if(bearerHeader){
                  bearerToken = bearerHeader.split(" ")[1];
                 verificar = jwt.verify(bearerToken, process.env.TKN_SECRET)
                 req.token = verificar
                  next();      
              }    
               
              else{
                    res.json({
                          message: 'error'
                    })
              }
}




module.exports = router;