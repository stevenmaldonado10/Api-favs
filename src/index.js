const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();


// import mongoose
const conexion = require('./Config/config')
conexion(`${process.env.URI}`)

// import route
//const authentication = require('./Routes/authentication');
const register = require('./Routes/register');
const login = require('./Routes/login');
const getFavs = require('./Routes/getFavs');
const postFavs = require('./Routes/postFavs');
const getFavId = require('./Routes/getFavId');
const deleteFavId = require('./Routes/deleteFavId');


// route middleware
app.use(express.json());
app.use('/auth/local',register);
app.use('/auth/local',login);
app.use('/api',getFavs);
app.use('/api',postFavs);
app.use('/api',getFavId);
app.use('/api',deleteFavId);

app.get('/', (req, res)=>{
    res.json({

        message:'oki'
    })
})

app.listen(process.env.PORT, ()=> console.log('conexión oki'))