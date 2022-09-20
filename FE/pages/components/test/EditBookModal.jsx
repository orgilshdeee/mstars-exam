import * as React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import axios from "axios";
import moment from "moment";

export default function EditBookModal(props) {
  function submitHandler(e) {
    e.preventDefault();
    axios
      .put(`https://orgil.ilearn.mn/v1/books${e.target._id.value}`, {
        book_title: e.target.book_title.value,
        book_isbn: e.target.book_isbn.value,
        book_author: e.target.book_author.value,
        book_publisher: e.target.book_publisher.value,
        book_published_date: e.target.book_published_date.value,
        book_price: e.target.book_price.value,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("update succesful");
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
        open={props.openEditBook}
        onClose={() => {
          props.setOpenEditBook(false);
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
            Edit Book
          </Typography>
          <TextField
            label="Book Name"
            defaultValue={props?.data?.book_title}
            name="book_title"
            style={{
              width: "80%",
            }}
          ></TextField>
          <TextField
            label="Code"
            defaultValue={props?.data?._id.slice(5, 11)}
            name="_id"
            style={{
              width: "80%",
            }}
          ></TextField>
          <TextField
            label="Price"
            defaultValue={props?.data?.book_price}
            name="book_price"
            style={{
              width: "80%",
            }}
          ></TextField>
          <TextField
            label="Author"
            defaultValue={props?.data?.book_author}
            name="book_author"
            style={{
              width: "80%",
            }}
          ></TextField>
          <TextField
            label="ISBN"
            defaultValue={props?.data?.book_isbn}
            name="book_isbn"
            style={{
              width: "80%",
            }}
          ></TextField>
          <TextField
            label="Publisher"
            defaultValue={props?.data?.book_publisher}
            name="book_publisher"
            style={{
              width: "80%",
            }}
          ></TextField>
          <TextField
            label="Published on"
            defaultValue={moment(props?.data?.book_published_date).format(
              "YYYY-MM-DD"
            )}
            name="book_published_date"
            style={{
              width: "80%",
            }}
          ></TextField>
          <Button variant="contained" type="submit">
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
