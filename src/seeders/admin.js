const User = require('../models/userSchema')
const bcrypt = require('bcrypt')
let password = "admin2021"

exports.seedAdmin = () => {
    // check if its admin acct
    User.findOne({role: "admin"}, (err, admin) => {
        if(err) throw err
        if(admin){
            return "admin account already exists"
        }
        // if there is none, create admin acct
        User.create({
            firstName: "Richard",
            lastName: "Dixon",
            email: "rvictordixon@gmail.com",
            role: "admin"
        }, (err, user) => {
            if(err) throw err
            bcrypt.genSalt(10, (err, salt) => {
                if(err) throw err
                bcrypt.hash(password, salt, (err, hash) => {
                    if(err) throw err
                    user.password = hash
                    user.save((err, savedUser) => {
                        if(err) throw err
                        return "admin account created"
                    })
                })
            })
        })




    })


}