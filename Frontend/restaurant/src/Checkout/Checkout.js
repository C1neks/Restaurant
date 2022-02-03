import React from "react";

const Checkout = (props) => {
  const { cartItems } = props;
  let order = [];
  const getOrder = () => {
    cartItems.map(
      (cartItems) =>
        (order = [
          ...order,
          {
            items: [
              {
                productId: cartItems._id,
                quantity: cartItems.quantity,
                price: cartItems.price,
                total: cartItems.price * cartItems.quantity,
              },
            ],
          },
        ])
    );
    order = [...order, { user: "61e41f143a517d8f7b45a2fc" }];
    console.log("ORDER:", order);
    return order;
  };
  let x = getOrder();

  return x.map((items) => {
    console.log("ITEMS:", items);
    <div>ELO</div>;
  });
  // return cartItems.map((x) => (arr = [...arr, x]));
};

export default Checkout;
