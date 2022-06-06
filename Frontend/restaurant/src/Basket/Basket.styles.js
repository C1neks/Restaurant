import styled from "styled-components";
export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  background: white;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ primary }) => (primary ? "#eeaf29" : "#ef233c")};
  min-width: 10rem;
  min-height: 10rem;
  border-radius: 20px;
  margin: 1rem;
  box-shadow: 5px 11px 12px rgb(0 0 0 / 7%);
  color: white;
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
`;
