import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Button } from "../StyledComponents/Button";
import { CheckoutWrapper } from "./Checkout.styles";
import { ItemsContext } from "../App";
import { Item } from "../Menu/Menu.styles";

const Checkout = () => {
  let items = [];
  const context = useContext(ItemsContext);
  const createOrder = (cartItems) => {
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
    order = { items, user: "61e41f143a517d8f7b45a2fc" };
    console.log("ORDER:", order);
    axios.post("http://localhost:4000/orders", order).then((response) => {
      console.log(response.data.data);
      window.location.reload();
    });
  };

  return (
    <CheckoutWrapper>
      {context.cartItems.map((x) => (
        <div key={x.productId}>
          <div>{x.name.toUpperCase()}</div>
          <div>Quantity:{x.quantity}</div>
          <div>Price: {x.price * x.quantity}</div>
        </div>
      ))}
      <div>
        <h2>Total cost:{context.totalPrice}PLN</h2>
      </div>

      <Button onClick={() => createOrder(context.cartItems)}>Order</Button>
    </CheckoutWrapper>
  );
};

export default Checkout;
