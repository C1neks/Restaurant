import styled from "styled-components";
import burger from "../images/burger.jpg";
import pizza from "../images/pizzacat.jpg";
export const Wrapper = styled.div`
  background-color: #edf2f4;
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
  border-bottom: 1px solid #2b2d42;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: #edf2f4;
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

export const CategoryImg = styled.div`
  background-image: url(${pizza});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 40vh;
`;
export const CartButton = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "30px" : "10px")};
  background-color: ${({ primary }) => (primary ? "#a60b0b" : "#a60b0b")};
  color: ${({ primary }) => (primary ? "#000" : "#fff")};
  padding: ${({ big }) => (big ? "18px 30px" : "9px 12px")};
  font-size: ${({ bigFont }) => (bigFont ? "20px" : "14px")};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
  margin-left: 35px;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#2b2d42")};
    transform: translateY(-0.5rem) scale(1.02);
    color: #fff;
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

export const CategoryItemImg = styled.div`
  background-image: url(${burger});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 32.5rem;
  height: 30rem;
  border-radius: 10px;

  :hover {
    transform: scale(1.12, 1.08) translateY(-2rem) translateZ(0px);
  }
`;

export const Details = styled.div`
  width: 100%;
`;
export const Item = styled.div`
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  background: #fff;

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
