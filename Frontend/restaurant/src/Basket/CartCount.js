import React from "react";

const CartCount = (props) => {
  const { countCartItems } = props;
  return <div>{countCartItems ? <div>Cart:{countCartItems}</div> : null}</div>;
};

export default CartCount;
