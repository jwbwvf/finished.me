const express = require('express')
const router = express.Router()

// const { logout } = require('./../pages/login/index')

// router.get('/', require('./../pages/home/index'))

// router.get('/logout', logout)

router.get('/', function (req, res) {
  res.render('index', { name: 'Jason' })
})

module.exports = router
