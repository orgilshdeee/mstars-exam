import * as React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import axios from "axios";

export default function EditOrderModal(props) {
  const [order, setOrder] = useState("");
  console.log(props);
  const orderStatus = [
    "In Progess",
    "On hold",
    "Paid",
    "Delivered",
    "Completed",
  ];
  function submitHandler(e) {
    e.preventDefault();
    axios
      .put(`https://orgil.ilearn.mn/v1/orders?id=${e.target.order_id.value}`, {
        order_title: e.target.order_title.value,
        order_status: order,
        auction_id: e.target.auction_id.value,
        product_id: e.target.product_id.value,
        user_id: e.target.user_id.value,
        order_price: e.target.order_price.value,
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
  function handleChange(event) {
    setOrder(event.target.value);
  }
  return (
    <div>
      <Modal
        open={props.openEditOrder}
        onClose={() => {
          props.setOpenEditOrder(false);
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
          <Typography>Edit Order</Typography>
          <TextField
            label="Order ID"
            defaultValue={props?.data?._id}
            name="order_id"
          ></TextField>
          <TextField
            label="Order Title"
            defaultValue={props?.data?.order_title}
            name="order_title"
          ></TextField>
          <TextField
            label="Auction ID"
            defaultValue={props?.data?.auction_id}
            name="auction_id"
          ></TextField>
          <TextField
            label="Product ID"
            defaultValue={props?.data?.product_id}
            name="product_id"
          ></TextField>
          <TextField
            label="User ID"
            defaultValue={props?.data?.user_id}
            name="user_id"
          ></TextField>
          <TextField
            label="Order Price"
            defaultValue={props?.data?.order_price}
            name="order_price"
          ></TextField>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Order Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={order}
              onChange={handleChange}
              label="Order Status"
            >
              {orderStatus.map((status, i) => {
                return (
                  <MenuItem key={i} value={status}>
                    {status}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Button variant="contained" type="submit">
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
