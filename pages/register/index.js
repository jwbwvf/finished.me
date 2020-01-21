const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const User = mongoose.model('User')

const { generateJwt } = require('../../auth/token')
const { generateSalt, generateHash } = require('../../auth/security')

// Load the template once
// const template = require('marko').load(require.resolve('./register.marko'))
// const render = (res) => {
//   // Don't forget to set the expected HTTP headers for your HTML page:
//   res.setHeader('Content-Type', 'text/html; charset=utf-8')

//   // Render the template to the HTTP resposne output stream.
//   // The first argument is the view model and the second argument
//   // is the output stream to write to.
//   // template.render({}, res)
// }

const register = async (req, res) => {
  // if (!req.body.name || !req.body.email || !req.body.password) {
  //   render('', { message: 'All fields are required.' })
  //   return
  // }

  const user = new User()

  user.name = req.body.name
  user.email = req.body.email

  user.salt = generateSalt()
  user.hash = generateHash(user.salt, req.body.password)

  try {
    const savedUser = await user.save()
    var token = generateJwt(savedUser._id)
    return res.cookie('token', token).redirect('/users/' + user._id)
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  // getRegistration,
  register
}
