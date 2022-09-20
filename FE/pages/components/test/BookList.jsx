import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import EditBookModal from "./EditBookModal";
import { useState } from "react";
import moment from "moment";
import { useEffect } from "react";
import AddBookModal from "./AddBookModal";

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
  const booksApi = `http://localhost:4000/v1/books`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(booksApi, fetcher);
  const [dataa, setDataa] = useState();
  function deleteHandler(id) {
    axios.delete(`http://localhost:4000/v1/books/${id}`).then((res) => {
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
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Authors</TableCell>
            <TableCell>ISBN</TableCell>
            <TableCell>Publisher</TableCell>
            <TableCell>Published On</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data &&
            data?.data.map((d, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{d.book_title}</TableCell>
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
                      <EditIcon />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        deleteHandler(d._id);
                      }}
                    >
                      <DeleteForeverIcon />
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
      >
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
