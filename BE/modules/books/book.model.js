const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  book_title: {
    type: String,
    require: true,
  },
  book_isbn: {
    type: String,
    require: true,
  },
  book_author: {
    type: String,
  },
  book_publisher: {
    type: String,
  },
  book_published_date: {
    type: Date,
    require: true,
  },
  book_price: {
    type: Number,
    require: true,
  },
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;
