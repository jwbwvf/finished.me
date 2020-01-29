const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const User = mongoose.model('User')

const { verifyJwt } = require('../../auth/token')

// Load the template once
const template = require('marko').load(require.resolve('./user.marko'))
const render = (res, data) => {
  // Don't forget to set the expected HTTP headers for your HTML page:
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  // Render the template to the HTTP resposne output stream.
  // The first argument is the view model and the second argument
  // is the output stream to write to.
  template.render(data, res)
}

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, 'id name books')
    // future or admin
    user.isAllowedToModify = isAllowedToModify(req, user.id)
    render(res, user)
  } catch (error) { // todo needs to be changed to send error message with render
    return res.status(404).json({ message: 'Unable to find user by id.' })
  }
}

const isLoggedInUser = (req, id) => {
  if (!req.cookies || !req.cookies.token) return false

  const { token } = req.cookies
  const verifiedJwt = verifyJwt(token)

  if (verifiedJwt.exp <= Date.now() / 1000) return false

  // is the logged in user id (id from the token) the same as the user id of the page being viewed
  return verifiedJwt.id === id
}

// TODO add admin logic to this too
const isAllowedToModify = (req, id) => {
  return isLoggedInUser(req, id)
}

const addBook = async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id, 'books')
  if (isAllowedToModify(req, user.id)) {
    const { title } = req.body
    user.books.push({ title })
    user.save()

    user.isAllowedToModify = true
  }

  res.redirect(`/users/${id}/books`)
}

const deleteBook = async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id, 'books')
  if (isAllowedToModify(req, user.id)) {
    user.books.pull(req.params.bookId)
    user.save()

    user.isAllowedToModify = true
  }

  res.redirect(`/users/${id}/books`)
}

module.exports = {
  getUserById,
  addBook,
  deleteBook
}
