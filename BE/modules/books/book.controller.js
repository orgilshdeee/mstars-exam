const bookServices = require("./book.service");

const create = async (req, res) => {
  try {
    const book = await bookServices.createBook(req);
    res.json({
      success: true,
      data: book,
    });
  } catch (err) {
    res.json({
      success: false,
      error: err,
    });
  }
};

const getAll = async (req, res) => {
  const book = await bookServices.getAll(req);
  res.json({
    data: book,
  });
};

const getById = async (req, res) => {
  try {
    const book = await bookServices.getById(req);
    res.json({
      success: true,
      data: book,
    });
  } catch (err) {
    res.json({
      success: false,
      error: err,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await bookServices.updateBook(req);
    res.json({
      success: true,
      data: book,
    });
  } catch (err) {
    res.json({
      success: false,
      data: err,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await bookServices.deleteBook(req);
    res.json({
      success: true,
      data: book,
    });
  } catch (err) {
    res.json({
      success: false,
      error: err,
    });
  }
};

module.exports = { create, getAll, deleteBook, updateBook, getById };
