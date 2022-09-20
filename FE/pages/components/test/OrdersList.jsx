import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import EditOrderModal from "./EditOrderModal";
import { useState } from "react";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} = require("@mui/material");

const OrdersList = () => {
  const [openEditOrder, setOpenEditOrder] = useState(false);
  const [editData, setEditData] = useState();
  const rolesApi = `${process.env.NEXT_PUBLIC_SERVER_URL}v1/orders`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(rolesApi, fetcher);

  function deleteHandler(id) {
    axios.delete(`https://orgil.ilearn.mn/v1/orders/${id}`).then((res) => {
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
            <TableCell>Order ID</TableCell>
            <TableCell>Order Title</TableCell>
            <TableCell>Auction ID</TableCell>
            <TableCell>Product ID</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>Order Status</TableCell>
            <TableCell>Order Price</TableCell>
            <TableCell>Order Created Date</TableCell>
            <TableCell>Order Edit</TableCell>
            <TableCell>Order Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data &&
            data?.data.map((d, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{d._id}</TableCell>
                  <TableCell>{d.order_title}</TableCell>
                  <TableCell>{d.auction_id}</TableCell>
                  <TableCell>{d.product_id}</TableCell>
                  <TableCell>{d.user_id}</TableCell>
                  <TableCell>{d.order_status}</TableCell>
                  <TableCell>{d.order_price}</TableCell>
                  <TableCell>{d.created}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setOpenEditOrder(true), setEditData(data.data[i]);
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
      <EditOrderModal
        data={editData}
        openEditOrder={openEditOrder}
        setOpenEditOrder={setOpenEditOrder}
      />
    </TableContainer>
  );
};

export default OrdersList;
