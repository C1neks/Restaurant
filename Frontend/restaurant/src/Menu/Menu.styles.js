import styled from "styled-components";
import burger from "../images/burger.jpg";

export const Wrapper = styled.div`
  //background-color: #cbd18f;
  background-color: #efd29c;
`;
export const StyledList = styled.div`
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const MenuText = styled.div`
  font-size: 85px;
  font-weight: 300;
  letter-spacing: 1rem;
  padding-top: 1rem;
  margin-bottom: 20px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #efd29c;
  //@media only screen and (max-width: 600px) {
  //  flex-direction: row;
  //}
`;
export const CategoryName = styled.h2`
  font-size: clamp(1rem, 10vw, 5rem);
  font-weight: 900;
  letter-spacing: 0.5rem;
  line-height: 1.3;
  color: #fff;
`;
export const PriceAndButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`;
export const CartButton = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "30px" : "10px")};
  background-color: ${({ primary }) => (primary ? "#eeaf29" : "#000")};
  color: ${({ primary }) => (primary ? "#000" : "#fff")};
  padding: ${({ big }) => (big ? "18px 30px" : "9px 12px")};
  font-size: ${({ bigFont }) => (bigFont ? "20px" : "14px")};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
  margin-left: 20px;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#E38B06")};
    transform: translateY(-0.5rem) scale(1.02);
    color: #000;
  }
  &:active {
    transform: translateY(0.5rem);
  }
`;
export const ItemImg = styled.div`
  background-image: url(${burger});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 14.5rem;
  height: 14rem;
  border-radius: 10px;
`;

export const Details = styled.div`
  width: 100%;
`;
export const Item = styled.div`
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  background: #ebf2f3;

  width: 92%;
  height: 16rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;

  :hover {
    background: white;
    transform: scale(1.12, 1.08) translateY(0px) translateZ(0px);
  }
`;
