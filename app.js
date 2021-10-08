var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var passport = require('passport')
var session = require('express-session')

require('./models/db')
require('./auth/passport')

var indexRouter = require('./routes/index')
// var usersRouter = require('./routes/users')
// var publicRouter = require('./routes/public/index')

var app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({ secret: process.env.SESSION_SECRET }))
app.use(passport.initialize())
app.use(passport.session())

// var fs = require('fs')
// var config = require('./common/config')
var expressjwt = require('express-jwt')
// var publicKey = fs.readFileSync(config.jwt.public)
app.use(expressjwt({
  secret: process.env.JWT_SECRET, // publicKey,
  //  algorithm: 'RS512'
  getToken: req => {
    if (req && req.cookies && req.cookies.token) return req.cookies.token
  }
}).unless({
  path: [
    /^\/public\/.*/
  ]
})) // TODO this isn't working the middleware doesn't look for the token in the cookie

app.use('/', indexRouter)
// app.use('/users', usersRouter)
// app.use('/public', publicRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).redirect('/public/login')
    return
  }
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
})

module.exports = app
