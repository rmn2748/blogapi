const mongoose = require('mongoose');
const { isEmail} = require('validator')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    email : {
        type: String, 
        required: true,
        isEmail: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String, 
        required: [true, 'Please enter a password'],
        minlength: [3, 'password must be at least 3 characters long']
    },
}, {timestamp: true});

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next()
})

const User = mongoose.model('user', userSchema);
module.exports = User;