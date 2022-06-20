import styled from "styled-components";

export const AccountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
`;

export const AdminOrdersContainer = styled.div`
  text-align: center;
  width: 75%;
  box-shadow: 0px 0px 15px -3px rgb(41 22 22 / 34%);
  margin-bottom: 5rem;
  border-radius: 1rem;
  min-height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    width: 45%;
  }
`;

export const EditOrderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
`;
export const UserOrders = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  width: 92%;

  margin-bottom: 1.5rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const Status = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
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
  box-shadow: 0px 0px 15px -3px rgb(41 22 22 / 34%);

  background: white;
  min-height: ${({ account }) => (account ? "30rem" : "")};
  width: ${({ account }) => (account ? "30%" : "90%")};
  @media only screen and (min-width: 768px) {
    width: 45%;
  }

  :hover {
    background: #f8e4db;
    transform: scale(1.12, 1.08) translateY(0px) translateZ(0px);
  }
`;
