import React, { useState } from "react";
import { Button } from "../StyledComponents/Button";
import axios from "axios";
import Form from "../FormField/Form";
import { MainSubTitle } from "../Main/Main.styles";

const Account = ({ userDetails }) => {


  return (
    <>
      {userDetails.map((x) => (
        <div key={x._id}>
          <MainSubTitle>Account Details</MainSubTitle>
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
