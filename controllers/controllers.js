const model = require('../model/model')

// CRUD books
function getAllBooks(req, res, next) {
  const limit = req.query.limit
  const data = model.getAllBooks(limit)
  res.status(200).json({
    data
  })
}

function getOneBook(req, res, next) {
  const data = model.getOneBook(req.params.id)

  if (data.errors) {
    return next({
      status: 404,
      message: 'Book is not found',
      errors: data.errors
    })
  }

  res.status(200).json({
    data
  })
}

function createBook(req, res, next) {
  const data = model.createBook(req.body)

  if (data.errors) {
    return next({
      status: 400,
      message: "Cannot create book",
      errors: data.errors
    })
  }

  res.status(201).json({
    data
  })
}

function updateBook(req, res, next) {
  const data = model.updateBook(req.params.id, req.body)

  if (data.errors) {
    return next({
      status: 404,
      message: 'Book is not found',
      errors: data.errors
    })
  }

  res.status(200).json({
    data
  })
}

function deleteBook(req, res, next) {
  const data = model.deleteBook(req.params.id)

  if (data.errors) {
    return next({
      status: 404,
      message: "Book is not found",
      errors: data.errors
    })
  }

  res.status(200).json({
    data
  })
}

// CRUD authors

function getAllAuthors(req, res, next) {
  const data = model.getAllAuthors(req.params.id)
  if (data.errors) {
    return next({
      status: 404,
      message: 'Book is not found',
      errors: data.errors
    })
  }

  res.status(200).json({
    data
  })
}

function getOneAuthor(req, res, next) {
  const id = req.params.id
  const authorId = req.params.authorId
  const book = model.getOneBook(id)
  const data = model.getOneAuthor(id, authorId)

  if (data.errors) {
    return next({
      status: 404,
      message: 'Author is not found',
      errors: data.errors
    })
  }

  res.status(200).json({
    data
  })
}

function createAuthor(req, res, next) {
  const data = model.createAuthor(req.params.id, req.body)

  if (data.errors) {
    return next({
      status: 400,
      message: "Cannot create author",
      errors: data.errors
    })
  }

  res.status(201).json({
    data
  })
}

function updateAuthor(req, res, next) {
  const data = model.updateAuthor(req.params.id, req.params.authorId, req.body)

  if (data.errors) {
    return next({
      status: 404,
      message: 'Author is not found',
      errors: data.errors
    })
  }

  res.status(200).json({
    data
  })
}

function deleteAuthor(req, res, next) {
  const data = model.deleteAuthor(req.params.id, req.params.authorId)

  if (data.errors) {
    return next({
      status: 404,
      message: "Author is not found",
      errors: data.errors
    })
  }
  

  res.status(200).json({
    data
  })
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
