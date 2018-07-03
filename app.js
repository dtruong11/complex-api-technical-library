const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(require('cors')())
app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(morgan('dev'))


const booksRoutes = require('./routes/routes')
app.use('/books', booksRoutes)

// error handling
app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500
  res.status(status).json({
    error: err
  })
})

app.use((req, res, next) => {
  res.status(404).json({
    error: {
      message: 'Not found'
    }
  })
})

const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app
