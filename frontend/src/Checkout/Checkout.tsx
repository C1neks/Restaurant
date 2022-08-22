import React, { useContext } from "react";

import { Button } from "../StyledComponents/Button";
import { CheckoutContainer, CheckoutWrapper } from "./Checkout.styles";
import { ItemsContext } from "../App";

import { orderService } from "../services/services";
import { ItemFromCart, ProductType, UserDetails } from "../models/models";

interface Props {
  userDetails: UserDetails;
  getUserDetails: (id: any) => Promise<void>;
  setCartItems: React.Dispatch<React.SetStateAction<Array<ProductType>>>;
}

type CheckoutItem = {
  _id: string;
  name: string;
  quantity: number;
};

const Checkout: React.FC<Props> = ({
  userDetails,
  getUserDetails,
  setCartItems,
}) => {
  let items: any[] = [];
  const context = useContext(ItemsContext);
  const user = userDetails;

  const createOrder = async (cartItems: ProductType[]) => {
    let order: { items: any[]; user: string | number };
    cartItems.map(
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
    console.log(items);
    order = { items, user: user._id };

    const response = await orderService.createOrder(order);

    getUserDetails(user._id);
    setCartItems([]);
  };

  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        {context.cartItems.map((x: ProductType) => (
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
              {context.totalPrice * Number((0.9).toFixed(1))}
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
