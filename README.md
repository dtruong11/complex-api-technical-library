# Complex Technical Library API

A built-from-scratch API with an MVC architecture.  You can perform CRUD actions with books, authors.

## Development Requirements
Follow RESTful patterns
Built an MVC structure
Include error handling
Include nested resources

### Books
* ID: An automatically generated unique id that represents the book.
* Name: (String) Name of the book.
* Borrowed: (Boolean) True/false value that represents whether or not the book has been borrowed. Required.
* Description: (String) A description of the book. Optional.
* Authors: (Array) An array of authors.

### Authors
* ID: (You Choose) A unique id that represents the author. Created automatically.
* First Name: (String) First name of the author. Required.
* Last Name: (String) Last name of the author. Required.
* Authors will have different IDs even if they have the same first and last name.

### RESTful routes can:
Create, Read, Update, and Delete books
Create, Read, Update, and Delete authors through books

### CRUD actions on books
* GET /books -> returns all books as an array of objects
* GET /books/:id -> returns a single book resource
* POST /books -> creates a new book; body must contain these fields and authors must be an array of names: { name: "451 Farenheit", borrowed: true, description: "This book is about the government burning all books.", authors: ['Ray BradBury']}
* PUT /books/:id -> updates an existing book resource (must contain above fields as well)
* DELETE /books/:id -> deletes a book resource

### CRUD actions on authors
* GET /books/:id/authors -> returns all authors for a single book
* GET /books/:id/authors/:authorId -> returns a single author from a specific book
* POST /books/:id/authors -> creates a new author or authors for a book; body must contain these fields: { authors : ['Severus Snape'] }
* PUT /books/:id/authors/:authorId -> updates an existing author resource. Must be in this format: { firstName : 'Harry', lastName : 'Potter' }
* DELETE /books/:id/authors/:authorId -> deletes an author from a book

## Setup
1. Fork and clone this repository
2. Run `npm install`
3. Run the tests with `npm test`
4. Run the server in development mode with `npm run dev` or run it in production mode with `npm start`
