const passport = require('passport')
const { generateJwt } = require('../../auth/token')

// const template = require('marko').load(require.resolve('./login.marko'))

const render = (res) => {
  // Don't forget to set the expected HTTP headers for your HTML page:
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  // Render the template to the HTTP resposne output stream.
  // The first argument is the view model and the second argument
  // is the output stream to write to.
  // template.render({}, res)
}

// const getLogin = (req, res) => {
//   render(res)
// }

// TODO
const login = (req, res, next) => {
  // if (!req.body.email || !req.body.password) {
  //   render('', { message: 'All fields are required.' })
  //   return
  // }

  passport.authenticate('local', function (err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      // render('', { message: 'Incorrect email or password.' })
      return
    }
    req.logIn(user, function (err) {
      if (err) { return next(err) }

      var token = generateJwt(user._id)
      return res.cookie('token', token).redirect('/users/' + user._id)
    })
  })(req, res, next)
}

module.exports = {
  // getLogin,
  login
}
