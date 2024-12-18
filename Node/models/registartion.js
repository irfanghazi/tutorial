const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    age: {
        type: Number,
        required: true
    }
})

const UserModel =  new mongoose.model('UserModel', userSchema)
module.exports = UserModel