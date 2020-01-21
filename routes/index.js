const express = require('express')
const router = express.Router()

const { register } = require('./../pages/register/index')
const { login } = require('./../pages/login/index')

router.get('/', require('./../pages/home/index'))
router.get('/register', (req, res) => { res.sendFile('register.html', { root: 'public' }) })
router.post('/register', register)
router.get('/login', (req, res) => { res.sendFile('login.html', { root: 'public' }) })
router.post('/login', login)

module.exports = router
