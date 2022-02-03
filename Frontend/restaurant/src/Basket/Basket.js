import React from "react";
import { Cart } from "./Basket.styles";
import { Button } from "../GlobalStyles";
import { MenuItem, MenuLink } from "../NavBar/Navbar.styles";
import CartCount from "./CartCount";

const Basket = (props) => {
  const { cartItems, onAddToCart, onRemoveFromCart } = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  return (
    <Cart>
      {/*{console.log("CART ITEMS:", cartItems)}*/}
      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
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
