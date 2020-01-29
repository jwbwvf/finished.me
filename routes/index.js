const express = require('express')
const router = express.Router()

const { register, getRegisterPage } = require('./../pages/register/index')
const { login, getLoginPage, logout } = require('./../pages/login/index')

router.get('/', require('./../pages/home/index'))
router.get('/register', getRegisterPage)
router.post('/register', register)
router.get('/login', getLoginPage)
router.post('/login', login)
router.get('/logout', logout)

module.exports = router
