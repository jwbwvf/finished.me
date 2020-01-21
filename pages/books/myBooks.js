const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const User = mongoose.model('User')

// Load the template once
const template = require('marko').load(require.resolve('./myBooks.marko'))
const render = (books, res) => {
  // Don't forget to set the expected HTTP headers for your HTML page:
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  // Render the template to the HTTP resposne output stream.
  // The first argument is the view model and the second argument
  // is the output stream to write to.
  template.render({ books }, res)
}

const getBooks = async (req, res) => {
  const user = await User.findById('5e180894ce2f0b735fdf0a12')
  render(user.books, res)
}

const addBook = (req, res) => {
  // TODO add book to database
  render([req.body.book, ...['your money or your life', 'grit', 'richest man in babylon']], res)
}

const deleteBook = (req, res) => {
  // TODO delete book from database
  render(['your money or your life', 'grit', 'richest man in babylon'], res)
}

module.exports = {
  getBooks,
  addBook,
  deleteBook
}
