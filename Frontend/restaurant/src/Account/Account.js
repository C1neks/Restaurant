import React, { useState } from "react";
import { Button } from "../StyledComponents/Button";
import axios from "axios";
import AddProductForm from "../FormField/AddProductForm";
import { MainSubTitle } from "../Main/Main.styles";
import {
  AccountContainer,
  Spacer,
  UserOrder,
  UserOrders,
} from "./Account.styles";

const Account = ({ userDetails }) => {
  console.log("DETAILS ACCOUNT!", userDetails);
  return (
    <>
      {
        <AccountContainer key={userDetails._id}>
          <MainSubTitle>Account Details</MainSubTitle>
          <Spacer></Spacer>
          <h2>Your name:{" " + userDetails.name}</h2>
          <h3>Your Email:{" " + userDetails.email}</h3>
          <UserOrders>
            <MainSubTitle>Order History</MainSubTitle>
            {userDetails.orders.map((y) => (
              <UserOrder key={y._id}>
                <Spacer></Spacer>
                <p>Your Order:{" " + y._id}</p>
                {y.items.map((z) => (
                  <div key={z.productId}>
                    <p>Product:{z.productId}</p>
                  </div>
                ))}
                <p>Status: {y.status}</p>

                <p>Total Price: {y.subTotal + "$"}</p>
                <Spacer></Spacer>
              </UserOrder>
            ))}
          </UserOrders>
        </AccountContainer>
      }
      )}
    </>
  );
};

export default Account;
