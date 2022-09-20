import * as React from "react";
import useSWR from "swr";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import EditBookModal from "./EditBookModal";
import { useState } from "react";
import moment from "moment";
import AddBookModal from "./AddBookModal";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} = require("@mui/material");

const BookList = () => {
  const [openEditBook, setOpenEditBook] = useState(false);
  const [openAddBook, setOpenAddBook] = useState(false);
  const [editData, setEditData] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const booksApi = `https://orgil.ilearn.mn/v1/books`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(booksApi, fetcher);
  function deleteHandler(id) {
    axios.delete(`https://orgil.ilearn.mn/v1/books/${id}`).then((res) => {
      if (res.status === 200) {
        location.reload();
      }
    });
  }
  return (
    <TableContainer variant="outlined">
      <Table aria-label="demo table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                fontWeight: "bold",
              }}
            >
              #
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
              }}
            >
              Name
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
              }}
            >
              Code
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
              }}
            >
              Price
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
              }}
            >
              Authors
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
              }}
            >
              ISBN
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
              }}
            >
              Publisher
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
              }}
            >
              Published On
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data &&
            data?.data.map((d, i) => {
              return (
                <TableRow key={i}>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {i + 1}
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {d.book_title}
                  </TableCell>
                  <TableCell>{d._id.slice(5, 11)}</TableCell>
                  <TableCell>{d.book_price}$</TableCell>
                  <TableCell>{d.book_author}</TableCell>
                  <TableCell>{d.book_isbn}</TableCell>
                  <TableCell>{d.book_publisher}</TableCell>
                  <TableCell>
                    {moment(d.book_published_date).format("YYYY-MM-DD")}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setOpenEditBook(true), setEditData(data.data[i]);
                      }}
                    >
                      <EditIcon color="primary" />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={handleOpen}>
                      <DeleteForeverIcon />
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 400,
                            bgcolor: "background.paper",
                            border: "2px solid #000",
                            boxShadow: 24,
                            p: 4,
                          }}
                        >
                          <Typography
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginBottom: "20px",
                            }}
                          >
                            Confirm to delete this book
                          </Typography>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            <Button
                              variant="contained"
                              onClick={() => {
                                deleteHandler(d._id);
                              }}
                            >
                              Yes
                            </Button>
                            <Button
                              variant="contained"
                              onClick={() => {
                                location.reload();
                              }}
                            >
                              No
                            </Button>
                          </div>
                        </Box>
                      </Modal>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <Button
        onClick={() => {
          setOpenAddBook(true);
        }}
        variant="contained"
        style={{
          margin: "1% 45%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <AddIcon />
        Add Book
      </Button>
      <AddBookModal openAddBook={openAddBook} setOpenAddBook={setOpenAddBook} />
      <EditBookModal
        data={editData}
        openEditBook={openEditBook}
        setOpenEditBook={setOpenEditBook}
      />
    </TableContainer>
  );
};

export default BookList;
