import React, { useState } from "react";
import { Button } from "../StyledComponents/Button";
import axios from "axios";
import Form from "../FormField/Form";

const Account = ({ userDetails }) => {
  // const [status, setStatus] = useState("inprocessing");
  //
  // const handleChange = (event) => {
  //   setStatus(event.target.value);
  //   console.log(status);
  // };
  // const handleEditStatus = (id) => {
  //   const body = {
  //     status: status,
  //   };
  //   editOrderStatus(id, body);
  // };
  // const editOrderStatus = (id, body) => {
  //   axios.patch(`http://localhost:4000/orders/${id}`, body).then((response) => {
  //     console.log(response.data.data);
  //   });
  // };

  return (
    <>
      {userDetails.map((x) => (
        <div key={x._id}>
          <h2>Name:{x.name}</h2>
          <h3>Email:{x.email}</h3>
          <h3>
            {x.orders.map((y) => (
              <div>
                <p>Orderid:{y._id}</p>
                {y.items.map((z) => (
                  <div>
                    <p>Product:{z.productId}</p>
                  </div>
                ))}
                <p>Status: {y.status}</p>
                {/*<select value={status} onChange={handleChange}>*/}
                {/*  <option value="inprocessing">inprocessing</option>*/}
                {/*  <option value="done" selected>*/}
                {/*    done*/}
                {/*  </option>*/}
                {/*</select>*/}
                {/*<Button onClick={() => handleEditStatus(y._id)}>Edit</Button>*/}
                <p>Total Price: {y.subTotal}</p>
              </div>
            ))}
          </h3>
        </div>
      ))}
    </>
  );
};

export default Account;
