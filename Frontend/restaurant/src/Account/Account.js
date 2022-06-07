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
          <h2>Name:{" " + userDetails.name}</h2>
          <h3>Email:{" " + userDetails.email}</h3>
          <UserOrders>
            <MainSubTitle>Order History</MainSubTitle>
            {userDetails.orders.map((y) => (
              <UserOrder key={y._id}>
                <Spacer></Spacer>
                <h4>Order Number</h4>
                <p>{y._id}</p>
                <h4>Products</h4>
                {y.items.map((z) => (
                  <div key={z.productId}>
                    <p>{z.productName}</p>
                  </div>
                ))}
                <h4>Status</h4>
                <p>{y.status}</p>

                <p>Total Price: {y.subTotal + "$"}</p>
                <Spacer></Spacer>
              </UserOrder>
            ))}
          </UserOrders>
        </AccountContainer>
      }
    </>
  );
};

export default Account;
