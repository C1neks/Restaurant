import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Button } from "../StyledComponents/Button";
import { CheckoutContainer, CheckoutWrapper } from "./Checkout.styles";
import { ItemsContext } from "../App";
import { Item } from "../Menu/Menu.styles";
import { orderService } from "../services/services";
import { Container } from "../StyledComponents/Container";

const Checkout = ({ userDetails, getUserDetails, setCartItems }) => {
  let items = [];
  const context = useContext(ItemsContext);
  const user = userDetails;

  const createOrder = async (cartItems) => {
    let order = cartItems.map(
      (cartItems) =>
        (items = [
          ...items,
          {
            productId: cartItems._id,
            productName: cartItems.name,
            quantity: cartItems.quantity,
          },
        ])
    );

    order = { items, user: user._id };

    const response = await orderService.createOrder(order);

    getUserDetails(user._id);
    setCartItems([]);
  };

  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        {context.cartItems.map((x) => (
          <div key={x.productId}>
            <div>{x.name.toUpperCase()}</div>
            <div>Quantity:{x.quantity}</div>
            <div>Price: {x.price * x.quantity}</div>
          </div>
        ))}
        {user.orders.length > 5 ? (
          <div>
            <h2 style={{ textDecorationLine: "line-through" }}>
              Total cost:{context.totalPrice}PLN
            </h2>
            <h3>Regular customer discount is Active!</h3>
            <h2>
              Total cost:
              {context.totalPrice * (0.9).toFixed(1)}
              PLN
            </h2>
          </div>
        ) : (
          <div>
            <h2>Total cost:{context.totalPrice}PLN</h2>
          </div>
        )}

        <Button editAddButton onClick={() => createOrder(context.cartItems)}>
          Order
        </Button>
      </CheckoutWrapper>
    </CheckoutContainer>
  );
};

export default Checkout;
