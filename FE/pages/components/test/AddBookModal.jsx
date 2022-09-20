import * as React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import axios from "axios";

export default function AddBookModal(props) {
  function submitHandler(e) {
    e.preventDefault();
    axios
      .post(`https://orgil.ilearn.mn/v1/books`, {
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
            margin: "15% 30%",
          }}
          onSubmit={submitHandler}
        >
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "1.6rem",
            }}
          >
            Add Book
          </Typography>
          <TextField
            label="Book Name"
            name="book_title"
            required
            style={{
              width: "80%",
            }}
          />
          <TextField
            label="Price"
            name="book_price"
            required
            style={{
              width: "80%",
            }}
          ></TextField>
          <TextField
            label="Author"
            name="book_author"
            required
            style={{
              width: "80%",
            }}
          ></TextField>
          <TextField
            label="ISBN"
            name="book_isbn"
            required
            style={{
              width: "80%",
            }}
            inputProps={{
              maxLength: 10,
              minLength: 10,
            }}
          />
          <TextField
            label="Publisher"
            name="book_publisher"
            style={{
              width: "80%",
            }}
          ></TextField>
          <TextField
            label="Published on"
            name="book_published_date"
            style={{
              width: "80%",
            }}
            type="date"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" type="submit">
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
