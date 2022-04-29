const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    email:{type: String, required: true, match:[/.+\@.+\..+/, 'Por favor ingrese un correo válido'] },
    password:{type: String, required: true, minlenght: [6, 'Password con mínimo 6 caracteres'] }

}

)

module.exports = mongoose.model('User', userSchema);