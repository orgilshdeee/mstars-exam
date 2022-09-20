import * as React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import axios from "axios";

export default function AddBookModal(props) {
  function submitHandler(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/v1/books/`, {
        book_title: e.target.book_title.value,
        book_isbn: e.target.book_isbn.value,
        book_author: e.target.book_author.value,
        book_publisher: e.target.book_publisher.value,
        book_published_date: e.target.book_published_date.value,
        book_price: e.target.book_price.value,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("book succesfully added");
        }
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div>
      <Modal
        open={props.openAddBook}
        onClose={() => {
          props.setOpenAddBook(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          style={{
            backgroundColor: "white",
            color: "black",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
          onSubmit={submitHandler}
        >
          <Typography>Edit Book</Typography>
          <TextField label="Book Name" name="book_title"></TextField>
          <TextField label="Price" name="book_price"></TextField>
          <TextField label="Author" name="book_author"></TextField>
          <TextField label="ISBN" name="book_isbn"></TextField>
          <TextField label="Publisher" name="book_publisher"></TextField>
          <TextField
            label="Published on"
            name="book_published_date"
          ></TextField>
          <Button variant="contained" type="submit">
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
