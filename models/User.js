const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT = 10

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    photo: String,
    phone_number: Number,
    is_admin: {
        type: Boolean,
        default: false
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {timestamps: true})

userSchema.pre('save', function(next){
    const user = this
    // console.log(user)
    if(!user.isModified('password')) return next()

    bcrypt.genSalt(SALT, (err, salt) => {
        if(err) return next(err)

        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) return next(err)
            user.password = hash
            next()
        })
    })
})


const User = mongoose.model('User',userSchema)

module.exports = User