import styled from "styled-components";

export const AccountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ebf2f3;
`;

export const UserOrders = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background: #ebf2f3;

  width: 92%;

  //border-radius: 10px;
  //box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
`;

export const Spacer = styled.div`
  margin-bottom: 2rem;
`;

export const UserOrder = styled.div`
  margin: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  width: 90%;
  background: white;

  :hover {
    background: #efd29c;
    transform: scale(1.12, 1.08) translateY(0px) translateZ(0px);
  }
`;
