import React, { useContext } from "react";
import {
  Cart,
  CartButton,
  CartContainer,
  CartItem,
  CartItems,
  CartPiece,
  TotalPriceCartItem,
} from "./Basket.styles";
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
        <MainSubTitle>CART</MainSubTitle>
        {context.cartItems.length === 0 && <div>Cart is Empty</div>}
        <CartItems>
          {context.cartItems.map((item) => (
            <CartItem key={item._id}>
              <CartPiece>{item.name}</CartPiece>
              <CartPiece>
                <CartButton onClick={() => context.onAddToCart(item)}>
                  +
                </CartButton>
                <CartButton onClick={() => context.onRemoveFromCart(item)}>
                  -
                </CartButton>
              </CartPiece>
              <CartPiece>
                {item.quantity} x {item.price}PLN
              </CartPiece>
            </CartItem>
          ))}
        </CartItems>
        {context.cartItems.length !== 0 && (
          <>
            <TotalPriceCartItem>
              <CartPiece>Total Price </CartPiece>
              <CartPiece></CartPiece>
              <CartPiece>{context.totalPrice + "PLN"}</CartPiece>
            </TotalPriceCartItem>
          </>
        )}
        {context.cartItems.length !== 0 ? (
          <MenuLink to="/checkout">
            <Button checkout>Checkout</Button>
          </MenuLink>
        ) : null}
      </Cart>
    </CartContainer>
  );
};

export default Basket;
