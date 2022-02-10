import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../StyledComponents/Button";
import { CheckoutWrapper } from "./Checkout.styles";

const Checkout = (props) => {
  const { cartItems, totalPrice } = props;

  let items = [];

  let order = cartItems.map(
    (cartItems) =>
      (items = [
        ...items,
        {
          productId: cartItems._id,
          quantity: cartItems.quantity,
        },
      ])
  );

  const createOrder = () => {
    order = { items, user: "61e41f143a517d8f7b45a2fc" };
    console.log("ORDER:", order);
    axios.post("http://localhost:4000/orders", order).then((response) => {
      console.log(response.data.data);
      window.location.reload();
    });
  };

  return (
    <CheckoutWrapper>
      {cartItems.map((x) => (
        <div key={x.productId}>
          <div>{x.name.toUpperCase()}</div>
          <div>Quantity:{x.quantity}</div>
          <div>Price: {x.price * x.quantity}</div>
        </div>
      ))}
      <div>
        <h2>Total cost:{totalPrice}PLN</h2>
      </div>

      <Button onClick={() => createOrder(order)}>Order</Button>
    </CheckoutWrapper>
  );
};

export default Checkout;
