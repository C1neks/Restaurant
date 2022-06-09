import styled from "styled-components";
import checkout from "../Checkout/Checkout";

export const Button = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "30px" : "20px")};
  background-color: ${({ primary }) => (primary ? "#ff1c48" : "#ff1c48")};
  background-color: ${({ checkout }) => (checkout ? "white" : "#ff1c48")};
  color: ${({ primary, checkout }) => (
    primary ? "black" : "#fff", checkout ? "black" : "white"
  )};
  font-weight: ${({ checkout }) => (checkout ? "600" : "normal")};
  padding: ${({ big }) => (big ? "18px 30px" : "10px 28px")};
  font-size: ${({ bigFont }) => (bigFont ? "20px" : "18px")};
  margin-top: ${({ editAddButton }) => (editAddButton ? "2rem" : "")};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#fff")};
    transform: translateY(-0.5rem) scale(1.02);
    color: black;
  }
  &:active {
    transform: translateY(0.5rem);
  }

  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    padding: ${({ big }) => (big ? "18px 30px" : "10px 20px")};
  }
  @media only screen and (max-width: 375px) {
    padding: ${({ big }) => (big ? "12px 20px" : "10px 20px")};
    font-size: ${({ bigFont }) => (bigFont ? "16px" : "18px")};
  }
`;
