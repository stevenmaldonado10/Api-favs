// jsonWebToken
const jwt = require('jsonwebtoken');


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

module.exports = verifyToken;