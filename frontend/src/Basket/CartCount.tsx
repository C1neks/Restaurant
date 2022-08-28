import React from "react";
import { BsMinecart } from "react-icons/bs";
import { CartCounter, ItemCounter } from "./Basket.styles";

type CountCart = {
  countCartItems: number;
};

const CartCount: React.FC<CountCart> = ({ countCartItems }) => {
  return (
    <div>
      {countCartItems ? (
        <CartCounter>
          <BsMinecart />
          <ItemCounter>{countCartItems}</ItemCounter>
        </CartCounter>
      ) : (
        <div>
          <BsMinecart />
        </div>
      )}
    </div>
  );
};

export default CartCount;
