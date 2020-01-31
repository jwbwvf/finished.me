const passport = require('passport')
const { generateJwt } = require('../../auth/token')

const template = require('marko').load(require.resolve('./login.marko'))

const render = (data, res) => {
  // Don't forget to set the expected HTTP headers for your HTML page:
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  // Render the template to the HTTP resposne output stream.
  // The first argument is the view model and the second argument
  // is the output stream to write to.
  template.render(data, res)
}

const getLoginPage = (req, res) => {
  render({}, res)
}

const login = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    render({ error: 'All fields are required.' }, res)
    return
  }

  passport.authenticate('local', function (err, user, info) {
    if (err) {
      render({ error: 'Unable to authenticate, try again.' })
      return
    }
    if (!user) {
      render({ error: 'Incorrect email or password.' }, res)
      return
    }
    req.logIn(user, function (err) {
      if (err) {
        render({ error: 'Unable to login, try again.' })
        return
      }

      var token = generateJwt(user._id)
      return res.cookie('token', token).redirect(`/users/${user._id}/books`)
    })
  })(req, res, next)
}

const logout = (req, res) => {
  req.logout()
  return res.cookie('token', '').redirect('/public/login')
}

module.exports = {
  getLoginPage,
  login,
  logout
}
