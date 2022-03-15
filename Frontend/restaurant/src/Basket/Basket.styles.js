import styled from "styled-components";
export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #efd29c;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eeaf29;
  width: 800px;
  border-radius: 20px;
  margin: 10px;
  box-shadow:5px 11px 12px rgb(0 0 0 / 7%);
`;

export const CartButton = styled.button`
  width: 35px;
  height: 35px;
  background: white;
  text-decoration: none;
  border: none;
  border-radius: 50px;
  font-size: 25px;
  margin: 10px;
  box-shadow:0 2px 12px rgb(0 0 0 / 8%);
  :hover{
    background: #eeaf29;
  }
  `
  export const CartItem = styled.div`
  display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 500px;
  `



