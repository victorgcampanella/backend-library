// index, show, store, update, destroy
const Book = require('../models/Book');

module.exports = {
  async index(request, response) {
    const book = await Book.find();

    return response.json(book);
  },

  async store(request, response) {
    const { name } = request.body;

    const bookExist = await Book.findOne({ name });

    if (bookExist) {
      return response.json({ message: 'Book already exist' });
    }

    const book = await Book.create({ name });

    return response.json(book);
  },

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const bookExist = await Book.findById({ _id: id });

    if (!bookExist) {
      return response.json({ message: 'This books is not exists' });
    }

    await Book.findByIdAndUpdate({ _id: id }, { name });

    return response.json({ message: 'This books is updated' });
  },

  async delete(request, response) {
    const { id } = request.params;

    const bookExist = await Book.findOne({ _id: id });

    if (!bookExist) {
      return response.json({ message: 'This books is not exists' });
    }

    await Book.findByIdAndDelete({ _id: id });

    return response.send();
  },
};
