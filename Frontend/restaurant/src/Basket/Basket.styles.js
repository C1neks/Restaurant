import styled from "styled-components";
export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  background: white;
`;
export const CartItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

export const CartPiece = styled.div`
  width: 33%;
`;
export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: ${({ primary }) => (primary ? "#f8e4db" : "#f8e4db")};
  min-width: 40rem;
  min-height: 10rem;
  border-radius: 20px;
  margin: 1rem;
  box-shadow: 5px 11px 12px rgb(0 0 0 / 7%);
`;

export const TotalPriceCartItem = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
`;

export const CartButton = styled.button`
  width: 2rem;
  height: 2rem;
  background: white;
  text-decoration: none;
  border: none;
  border-radius: 50px;
  font-size: 1.5rem;
  margin: 10px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 8%);
  :hover {
    background: #eeaf29;
  }
`;
export const CartItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
