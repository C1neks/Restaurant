import React from "react";

import {
  AccountContainer,
  Spacer,
  Status,
  UserOrder,
  UserOrders,
} from "./Account.styles";
import { MdDoneOutline } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { RegisterTitle } from "../Register/Register.styles";
import { UserDetails } from "../models/models";

interface Props {
  userDetails: UserDetails;
}

const Account: React.FC<Props> = ({ userDetails }) => {
  return (
    <>
      {
        <AccountContainer key={userDetails._id}>
          <RegisterTitle Account>Account Details</RegisterTitle>
          <Spacer></Spacer>
          <UserOrder account>
            <h2>Name:{" " + userDetails.name}</h2>
            <h3>Email:{" " + userDetails.email}</h3>
          </UserOrder>

          <UserOrders>
            <RegisterTitle>Order History</RegisterTitle>
            {userDetails.orders.map((y: any) => (
              <UserOrder key={y._id}>
                <Spacer></Spacer>
                <h4>Order Number</h4>
                <p>{y._id}</p>
                <h4>Products</h4>
                {y.items.map((z: any) => (
                  <div key={z.productId}>
                    <p>{z.productName}</p>
                  </div>
                ))}
                <h4>Status</h4>
                <Status>
                  {y.status}
                  {y.status === "done" ? (
                    <MdDoneOutline color={"green"} />
                  ) : (
                    <GrInProgress color={"red"} />
                  )}
                </Status>

                <h4>Total Price</h4>
                <p>{y.subTotal + "$"}</p>
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
