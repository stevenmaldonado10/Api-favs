# API FAVS

Esta es una API REST para realizar un CRUD de lista de favoritos para usuarios.

# COLECCIONES EN MONGODB
* USER
* FAV

# VARIABLES DE ENTORNO
PORT = 4000
TKN_SECRET = SUPERSECRETO
URI = mongodb://127.0.0.1:27017/pruebas

# RUTAS 
REGISTRO
* /auth/local/register
- Request: { password string, email	string }
 

LOGIN 
* /auth/local/login
- Request: { password string, email	string }
- Response: status(200){user: Email,
          token: token}


GET FAVS
* /api/favs
- Response: status(200){
            message : favs
            }

POST FAVS
* /api/favs
- Request: {
         list: String ,
    fav:[title: String , description: String, link: String],
    userEmail: String  
         }
- Response: status(200){
          message : list
        }

GET FAV ID
* /api/favs:id

- Response: status(200){
          message : fav
        }

DELETE FAV ID
* /api/favs:ID
- Response: status(200){
          message : "document deleted"
        }