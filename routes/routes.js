const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers')

// CRUD books
router.get('/', ctrl.getAllBooks)
router.get('/:id', ctrl.getOneBook)
router.post('/', ctrl.createBook)
router.put('/:id', ctrl.updateBook)
router.delete('/:id', ctrl.deleteBook)

// CRUD authors
router.get('/:id/authors', ctrl.getAllAuthors)
router.get('/:id/authors/:authorId', ctrl.getOneAuthor)
router.post('/:id/authors', ctrl.createAuthor)
router.put('/:id/authors/:authorId', ctrl.updateAuthor)
router.delete('/:id/authors/:authorId', ctrl.deleteAuthor)

module.exports = router 
