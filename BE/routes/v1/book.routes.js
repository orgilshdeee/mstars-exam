const express = require("express");
const router = express.Router();
const bookController = require("../../modules/books/book.controller");

router.post("/", bookController.create);
router.get("/", bookController.getAll);
router.get("/:id", bookController.getById);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
