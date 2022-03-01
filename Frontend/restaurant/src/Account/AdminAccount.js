import React, { useState, useEffect } from "react";
import { Button } from "../StyledComponents/Button";
import axios from "axios";
import { Container } from "../FormField/Form.styles";

const AdminAccount = ({ orders }) => {
  const [status, setStatus] = useState("done");

  const handleChange = (event) => {
    setStatus(event.target.value);
    console.log(status);
  };

  const handleEditStatus = (id) => {
    const body = {
      status: status,
    };
    editOrderStatus(id, body);
  };
  const editOrderStatus = (id, body) => {
    axios.patch(`http://localhost:4000/orders/${id}`, body).then((response) => {
      console.log(response.data.data);
    });
  };

  return (
    <Container>
      <h1>Edit Order Status</h1>
      {orders.map((x) => (
        <div key={x._id}>
          <h2>UserId:{x.user}</h2>
          <h3>
            <div>
              <p>Orderid:{x._id}</p>
              {x.items.map((z) => (
                <div>
                  <p>Product:{z.productId}</p>
                </div>
              ))}
              <p>Status: {x.status}</p>
              <select key={x._id} value={status} onChange={handleChange}>
                <option value="inprocessing">inprocessing</option>
                <option value="done">done</option>
              </select>
              <Button onClick={() => handleEditStatus(x._id)}>Edit</Button>
              <p>Total Price: {x.subTotal}</p>
            </div>
          </h3>
        </div>
      ))}
    </Container>
  );
};

export default AdminAccount;
