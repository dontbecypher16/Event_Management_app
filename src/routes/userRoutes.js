const express = require('express')
const router = express.Router()
const UserCtrl = require('../controllers/userControllers')
const User = require('../models/userSchema')


router.post('/signup', UserCtrl.registerNewUser)
router.post('/login', UserCtrl.loginUser)

module.exports = router