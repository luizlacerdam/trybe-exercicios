const BookService = require('../services/book.service');

const getAll = async (req, res) => {
    const books = await BookService.getAll();
    res.status(200).json(books);
};

const getById = async (req, res) => {
    const { id } = red.params;
    const book = await BookService.getById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
};

module.exports = {
    getAll,
    getById,
};