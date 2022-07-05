import React from "react";
import { BsMinecart } from "react-icons/bs";
import { CartCounter, ItemCounter } from "./Basket.styles";
const CartCount = (props) => {
  const { countCartItems } = props;
  return (
    <div>
      {countCartItems ? (
        <CartCounter>
          <BsMinecart></BsMinecart>
          <ItemCounter>{countCartItems}</ItemCounter>
        </CartCounter>
      ) : (
        <div>
          <BsMinecart></BsMinecart>
        </div>
      )}
    </div>
  );
};

export default CartCount;
