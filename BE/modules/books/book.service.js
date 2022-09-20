const Books = require("./book.model");

const createBook = async (req) => {
  const book = new Books(req.body);
  console.log(book);
  return book.save();
};

const getAll = async (req) => {
  return await Books.find();
};

const getById = async (req) => {
  const { id } = req.params;
  return await Books.findById(id);
};

const updateBook = async (req) => {
  const { id } = req.params;
  return await Books.findByIdAndUpdate(id, req.body);
};

const deleteBook = async (req) => {
  const { id } = req.params;
  return await Books.findByIdAndDelete(id);
};

module.exports = { createBook, getAll, getById, updateBook, deleteBook };
