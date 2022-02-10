import React from "react";
import { Cart } from "./Basket.styles";
import { Button } from "../StyledComponents/Button";
import { MenuItem, MenuLink } from "../NavBar/Navbar.styles";
import CartCount from "./CartCount";

const Basket = (props) => {
  const { cartItems, onAddToCart, onRemoveFromCart, totalPrice } = props;

  return (
    <Cart>
      {cartItems.length === 0 && <div>Cart Is Empty</div>}
      {cartItems.map((item) => (
        <div key={item._id}>
          <div>{item.name}</div>
          <div>
            <button onClick={() => onAddToCart(item)}>+</button>
            <button onClick={() => onRemoveFromCart(item)}>-</button>
          </div>
          <div>
            {item.quantity} x {item.price}PLN
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <div>TotalPrice</div>
          <div>{totalPrice}</div>
        </>
      )}
      <MenuLink to="/checkout">
        <Button>Checkout</Button>
      </MenuLink>
    </Cart>
  );
};

export default Basket;
