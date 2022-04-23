const mongoose = require('mongoose')

const favSchema = mongoose.Schema({

    list:{type: String, required: true },
    fav:[{title: String , description: String, link: String}],
    userEmail:{type: String, required: true}

}

)

module.exports = mongoose.model('Fav', favSchema);