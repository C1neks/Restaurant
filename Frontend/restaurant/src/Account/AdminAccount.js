import React, { useState, useEffect } from "react";
import { Button } from "../StyledComponents/Button";
import axios from "axios";
import { Container } from "../FormField/Form.styles";
import { orderService } from "../services/services";

const AdminAccount = ({ orders, getOrders }) => {
  const [status, setStatus] = useState("done");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleEditStatus = (id) => {
    const body = {
      status: status,
    };
    editOrderStatus(id, body);
  };

  const editOrderStatus = async (id, body) => {
    await orderService.updateOrder(id, body);
    getOrders();
  };

  return (
    <Container>
      <h1>Edit Order Status</h1>
      {orders.length === 0 ? (
        <Button onClick={() => getOrders()}>Show Orders</Button>
      ) : null}

      {orders.map((order) => (
        <div key={order._id}>
          <h2>UserId:{order.user}</h2>
          <h3>
            <div>
              <p>Orderid:{order._id}</p>
              {order.items.map((product) => (
                <div key={product.productId}>
                  <p>Product:{product.productId}</p>
                </div>
              ))}
              <p>Status: {order.status}</p>
              <select key={order._id} value={status} onChange={handleChange}>
                <option value="inprocessing">inprocessing</option>
                <option value="done">done</option>
              </select>

              <Button onClick={() => handleEditStatus(order._id)}>Edit</Button>
              <p>Total Price: {order.subTotal}</p>
            </div>
          </h3>
        </div>
      ))}
    </Container>
  );
};

export default AdminAccount;
