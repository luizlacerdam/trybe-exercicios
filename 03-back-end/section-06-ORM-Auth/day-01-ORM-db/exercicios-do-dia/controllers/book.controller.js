const BookService = require('../services/book.service');

const getAll = async (req, res) => {
    const books = await BookService.getAll();
    res.status(200).json(books);
};

const getById = async (req, res) => {
    const { id } = red.params;
    const book = await BookService.getById(id);
    res.status(200).json(book);
};

module.exports = {
    getAll,
    getById,
};