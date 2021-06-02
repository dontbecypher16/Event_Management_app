const User = require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = "mySecurePassword"
const expiry = 3600

exports.registerNewUser = (req, res) => {
   // Create a new user 
   User.findOne({ email: req.body.email}, (err, existingUser) => {
       if(err){
           return res.status(500).json({ err })
       }
       if(existingUser){
           return res.status(400).json({ message: "user with email already exists" })
       }
       User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email

    }, (err, newUser) => {
        if(err){
            return res.status(500).json({ err })
        }
        // Hash user's password
        bcrypt.genSalt(10, (err, salt) => {
            if(err){
                return res.status(500).json({ err })
            }
            bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                if(err){
                    return res.status(500).json({ err })
                }
                //save pw to db
                newUser.password = hashedPassword
                newUser.save((err, savedUser) => {
                    if(err){
                        return res.status(500).json({ err })
                    }
                    //Create a token for user
                    jwt.sign({
                        id: newUser._id,
                        firstName: newUser.firstName,
                        lastName: newUser.lastName
                    }, secret, {expiresIn: expiry}, (err, token) => {
                        if(err){
                            return res.status(500).json({ err })
                        }
                        //Send token back to the user
                        return res.status(200).json({message: "user registered successfully", token})

                        
                    })




                })




            })
        })


    })



   })
   
 
}

exports.loginUser = (req, res) => {
    // Check if user exists
    User.findOne({ email: req.body.email}, (err, existingUser) => {
        if(err){
            return res.status(500).json({ err })
        }
        if(!existingUser){
            return res.status(404).json({ message: "user with email does not exists" })
        }
        // Compare user's password with stored hash
      let match = bcrypt.compareSync(req.body.password, existingUser.password)
      if(!match){
          return res.status(401).json({ message: "wrong password"})
      }
            
            // Create a token 
              jwt.sign({
                  id: existingUser._id,
                  firstName: existingUser.firstName,
                  lastName: existingUser.lastName,
                  email: existingUser.email

              }, secret, {expiresIn: expiry}, (err, token) => {
                if(err) {
                    return res.status(500).json({err})
                } else{
                    return res.status(200).json({ message: "login successful", token})
                }
                // Send token to user
              })



    })



}