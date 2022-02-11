import React, { useContext } from "react";
import { Cart } from "./Basket.styles";
import { Button } from "../StyledComponents/Button";
import { MenuItem, MenuLink } from "../NavBar/Navbar.styles";
import CartCount from "./CartCount";
import { ItemsContext } from "../App";

const Basket = (props) => {
  const { onAddToCart, onRemoveFromCart } = props;
  const context = useContext(ItemsContext);
  return (
    <Cart>
      {context.cartItems.length === 0 && <div>Cart Is Empty</div>}
      {context.cartItems.map((item) => (
        <div key={item._id}>
          <div>{item.name}</div>
          <div>
            <button onClick={() => context.onAddToCart(item)}>+</button>
            <button onClick={() => context.onRemoveFromCart(item)}>-</button>
          </div>
          <div>
            {item.quantity} x {item.price}PLN
          </div>
        </div>
      ))}
      {context.cartItems.length !== 0 && (
        <>
          <div>TotalPrice</div>
          <div>{context.totalPrice}</div>
        </>
      )}
      <MenuLink to="/checkout">
        <Button>Checkout</Button>
      </MenuLink>
    </Cart>
  );
};

export default Basket;
