import styled from "styled-components";

export const CheckoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 35rem;
  width: 75%;
  box-shadow: 0px 0px 15px -3px rgb(41 22 22 / 34%);
  border-radius: 20px;
  text-align: center;
  @media only screen and (min-width: 1000px) {
    width: 50%;
    &:hover {
      border: none;
      font-size: 2.1rem;
      width: 57%;
    }
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;
