const express = require('express')
const router = express.Router()

const {getBooks, addBook, deleteBook} = require('../pages/books/myBooks')

router.get('/books', getBooks)
router.post('/books', addBook)
router.delete('/books/:id', deleteBook)

module.exports = router
