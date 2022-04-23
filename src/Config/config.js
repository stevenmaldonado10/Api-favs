const mongoose = require('mongoose');

function conexion (URI){

mongoose.connect(URI);

mongoose.connection.on('error', ()=> console.log('error en conexxión'));
mongoose.connection.once('connected', ()=> console.log('conexión mongoDB ok'));
}

module.exports = conexion;