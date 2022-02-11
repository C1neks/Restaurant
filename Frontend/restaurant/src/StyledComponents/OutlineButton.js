import styled from "styled-components";

export const OutlineButton = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "40px" : "30px")};
  border: 2px solid #333;
  color: #333;
  outline: none;
  padding: ${({ big }) => (big ? "15px 60px" : "13px 55px")};
  font-size: ${({ fontBig }) => (fontBig ? "22px" : "18px")};
  transition: all 0.5s ease;
  background-color: #fefefe;

  &:hover {
    background-color: #333;
    color: #fff;
    border: none;
    transform: translateY(-0.5rem) scale(1.02);
  }
  &:active {
    transform: translateY(0.5rem);
  }

  @media only screen and (max-width: 1200px) {
    border-radius: ${({ bigRadius }) => (bigRadius ? "20px" : "18px")};
    padding: ${({ big }) => (big ? "9px 30px" : "8px 28px")};
    font-size: ${({ fontBig }) => (fontBig ? "18px" : "16px")};
  }
`;
