const books = require('./data')
const shortid = require('shortid')
const uuid = require('uuid/v4')

function checkBook(id) {
  const errors = []
  const book = books.find(el => el.id === id)
  if (!book) {
    errors.push({
      status: 404,
      message: 'Book is not found by Id. Input a valid Id.'
    })
  }
  return errors
}

function validateBook(body) {
  const errors = []
  const name = body.name
  const borrowed = body.borrowed
  const description = body.description
  const authors = body.authors

  if (!name || !name.length || typeof(name) !== 'string') {
    errors.push({
      status: 400,
      message: "Please input name."
    })
  }

  if (typeof(borrowed) !== 'boolean') {
    errors.push({
      status: 400,
      message: "Please input borrowed status"
    })
  }

  if (!authors || !Array.isArray(authors)) {
    errors.push({
      status: 400,
      message: `Please input authors as an array of names, for examle ["Hellen John", "Juliet Kyle"]`
    })
  }
  return errors
}

function checkAuthors(id, authorId) {
  if(checkBook(id).length > 0){
    return checkBook(id)
  }
  const errors = []
  const book = books.find(el => el.id === id)
  const author = book.authors.find(el => el.authorId === authorId)
  if (!author) {
    errors.push({
      status: 404,
      message: 'Author is not found'
    })
  }
  return errors
}

function validateAuthors(body) {
  const errors = []
  const authors = body.authors
  if (!authors || !Array.isArray(authors)) {
    errors.push({
      status: 400,
      message: `authors' names should exist and should be an array`
    })
  }
  return errors
}

module.exports = {
  checkBook,
  validateBook,
  checkAuthors,
  validateAuthors
}
