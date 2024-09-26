const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        require: true,
        trim: true,
        min: 3,
        max: 20,
    },
    username: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    contactNumber: {
        type: String
    },
    profilePicture: {
        type: String,
    },

}, { timeStamps: true })
userSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
})
userSchema.method({
    async authenticate(password){
        return bcrypt.compare(password, this.hash_password)
    }
})
module.exports = mongoose.model('User', userSchema)