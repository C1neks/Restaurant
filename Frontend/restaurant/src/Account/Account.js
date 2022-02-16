import React from "react";

const Account = ({ userDetails }) => {
  return (
    <>
      {userDetails.map((x) => (
        <div>
          <h2>Name:{x.name}</h2>
          <h3>Email:{x.email}</h3>
          <h3>
            {x.orders.map((y) => (
              <div>
                {y.items.map((z) => (
                  <div>
                    <p>Product:{z.productId}</p>
                  </div>
                ))}
                <p>Status: {y.status}</p>
                <p>Total Price: {y.subTotal}</p>
              </div>
            ))}
          </h3>
        </div>
      ))}
    </>
  );
};

export default Account;
