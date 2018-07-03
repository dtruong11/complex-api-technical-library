const shortid = require('shortid')
const uuid = require('uuid')

const books = [{
  id: shortid.generate(),
  name: 'The Algorithm Design Manual',
  borrowed: true,
  description: 'The book now serves as the primary textbook of choice for algorithm design courses while maintaining its status as the premier practical reference guide to algorithms for programmers, researchers, and students.',
  authors: [{
    authorId: uuid(),
    firstName: 'Steven',
    lastName: 'Skiena'
  }]
}, {
  id: shortid.generate(),
  name: 'The Elements of Computing Systems: Building a Modern Computer from First Principles',
  borrowed: false,
  description: 'The Elements of Computing Systems gives students an integrated and rigorous picture of applied computer science, as its comes to play in the construction of a simple yet powerful computer system.',
  authors: [{
    authorId: uuid(),
    firstName: 'Noam',
    lastName: 'Nisan'
  }, {
    authorId: uuid(),
    firstName: 'Shimon',
    lastName: 'Schocken'
  }]
}, {
  id: shortid.generate(),
  name: 'Introduction to Algorithms',
  borrowed: true,
  description: ' Introduction to Algorithms uniquely combines rigor and comprehensiveness. The book covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers.',
  authors: [{
    authorId: uuid(),
    firstName: 'Thomas',
    lastName: 'Cormen'
  }, {
    authorId: uuid(),
    firstName: 'Charles',
    lastName: 'Leiserson'
  }, {
    authorId: uuid(),
    firstName: 'Ron',
    lastName: 'Rivest'
  }]
}]

module.exports = books
