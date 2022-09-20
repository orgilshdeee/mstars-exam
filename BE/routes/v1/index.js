const express = require("express");
const router = express.Router();
const booksRoute = require("./book.routes");

router.use("/books", booksRoute);

module.exports = router;
