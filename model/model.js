const books = require('./data')
const shortid = require('shortid')
const uuid = require('uuid/v4')
const checkBook = require('./validate').checkBook
const validateBook = require('./validate').validateBook
const checkAuthors = require('./validate').checkAuthors
const validateAuthors = require('./validate').validateAuthors

// CRUD books
function getAllBooks(limit) {
  return limit ? books.slice(0, limit) : books
}

function getOneBook(id) {
  let errors = checkBook(id)
  if (errors.length > 0) {
    return {
      errors
    }
  }
  return books.find(el => el.id === id)
}

function createBook(body) {
  let errors = validateBook(body)
  if (errors.length > 0) {
    return {
      errors
    }
  }
  const name = body.name
  const borrowed = body.borrowed
  const description = body.description
  const authorsBody = body.authors
  const authorsInput = authorsBody.map(el => {
    return {
      authorId: uuid(),
      firstName: el.split(' ')[0],
      lastName: el.split(' ')[1]
    }
  })
  const book = {
    id: shortid.generate(),
    name,
    borrowed,
    description,
    authors: authorsInput
  }
  books.push(book)
  return book
}

function updateBook(id, body) {
  let errors = [...checkBook(id), ...(validateBook(body))]
  if (errors.length > 0) {
    return {
      errors
    }
  }
  const name = body.name
  const borrowed = body.borrowed
  const description = body.description
  const authorsInput = body.authors.map(el => {
    return {
      authorId: uuid(),
      firstName: el.split(' ')[0],
      lastName: el.split(' ')[1]
    }
  })
  const book = books.find(el => el.id === id)
  book.name = name
  book.borrowed = borrowed
  book.description = description
  book.authors = authorsInput
  return book
}


function deleteBook(id) {
  let errors = checkBook(id)
  if (errors.length > 0) {
    return {
      errors
    }
  }
  const book = books.find(el => el.id === id)
  return books.splice(books.indexOf(book), 1)
}


// CRUD authors
function getAllAuthors(id) {
  let errors = checkBook(id)
  if (errors.length > 0) {
    return {
      errors
    }
  }
  const book = books.find(el => el.id === id)
  return book.authors
}

function getOneAuthor(id, authorId) {
  let errors = checkAuthors(id, authorId)
  if (errors.length > 0) {
    return {
      errors
    }
  }
  const book = books.find(el => el.id === id)
  const author = book.authors.find(el => el.authorId === authorId)
  return author
}

function createAuthor(id, body) {
  let errors = [...checkBook(id), ...validateAuthors(body)]
  if (errors.length > 0) {
    return {
      errors
    }
  }
  const book = books.find(el => el.id === id)
  const newAuthorArr = body.authors.map(el => {
    return {
      authorId: uuid(),
      firstName: el.split(' ')[0],
      lastName: el.split(' ')[1]
    }
  })
  book.authors.push(newAuthorArr)
  return newAuthorArr
}

function updateAuthor(id, authorId, body) {
  let errors = checkAuthors(id, authorId)
  if (errors.length > 0) {
    return {
      errors
    }
  }
  const firstName = body.firstName
  const lastName = body.lastName

  if (!firstName || !lastName) {
    return errors.push({
      status: 400,
      message: 'first name and last name are required.'
    })
  }

  const book = books.find(el => el.id === id)
  const author = book.authors.find(el => el.authorId === authorId)
  author.firstName = firstName
  author.lastName = lastName
  return author
}

function deleteAuthor(id, authorId) {
  let errors = checkAuthors(id, authorId)
  if (errors.length > 0) {
    return {
      errors
    }
  }
  const book = books.find(el => el.id === id)
  const authors = book.authors
  const author = authors.find(el => el.authorId === authorId)

  return authors.splice(authors.indexOf(author), 1)
}

module.exports = {
  getAllBooks,
  getOneBook,
  createBook,
  updateBook,
  deleteBook,

  getAllAuthors,
  getOneAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor
}
