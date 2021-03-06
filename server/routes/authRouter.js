const express = require("express");
const router = express.Router()
const authController = require('./authController')
const checkAuth = require('./checkAuth')

router.post('/login', authController.postLogin)
router.get('/login', authController.getLogin)
router.post('/logout', checkAuth, authController.Logout)

module.exports = router