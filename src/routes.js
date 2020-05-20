const express = require('express');
const BookController = require('./controllers/BookController');

const routes = express.Router();

routes.get('/books', BookController.index);
routes.post('/books', BookController.store);
routes.put('/books/:id', BookController.update);
routes.delete('/books/:id', BookController.delete);

module.exports = routes;
