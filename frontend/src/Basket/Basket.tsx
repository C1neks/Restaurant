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
import { MenuLink } from "../NavBar/Navbar.styles";

import { ItemsContext } from "../App";

import { RegisterTitle } from "../Register/Register.styles";
import { ItemFromCart, ProductType } from "../models/models";

const Basket: React.FC = () => {
  const context = useContext(ItemsContext);
  return (
    <CartContainer>
      <Cart>
        <RegisterTitle>CART</RegisterTitle>
        {context.cartItems.length === 0 && <div>Cart is Empty</div>}
        <CartItems>
          {context.cartItems.map((item: ProductType) => (
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
