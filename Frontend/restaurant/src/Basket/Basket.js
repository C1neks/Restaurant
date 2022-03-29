import React, { useContext } from "react";
import { Cart, CartButton, CartContainer, CartItem } from "./Basket.styles";
import { Button } from "../StyledComponents/Button";
import { MenuItem, MenuLink } from "../NavBar/Navbar.styles";
import CartCount from "./CartCount";
import { ItemsContext } from "../App";
import { MainSubTitle, MainText } from "../Main/Main.styles";

const Basket = (props) => {
  const { onAddToCart, onRemoveFromCart } = props;
  const context = useContext(ItemsContext);
  return (
    <CartContainer>
      <Cart>
        <MainSubTitle>Cart</MainSubTitle>
      {context.cartItems.length === 0 && <div>Cart is Empty</div>}
      {context.cartItems.map((item) => (
        <CartItem key={item._id}>
          <div>{item.name}</div>
          <div>
            <CartButton onClick={() => context.onAddToCart(item)}>+</CartButton>
            <CartButton onClick={() => context.onRemoveFromCart(item)}>-</CartButton>
          </div>
          <div>
            {item.quantity} x {item.price}PLN
          </div>
        </CartItem>
      ))}
      {context.cartItems.length !== 0 && (
        <>
          <div><p>Total Price</p>
          <p>{context.totalPrice}</p></div>

        </>
      )}
        {context.cartItems.length !== 0 ?
          <MenuLink to="/checkout">
            <Button>Checkout</Button>


          </MenuLink>: null

        }
      </Cart>
    </CartContainer>
  );
};

export default Basket;
