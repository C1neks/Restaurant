import styled from "styled-components";
import burger from "../images/burger.jpg";

import categoryimage from "../images/categoryyy.jpg";
import menu from "../images/menu.jpg";
import { Link } from "react-router-dom";
export const Wrapper = styled.div`
  background: rgba(254, 243, 243, 1);
  background: -webkit-linear-gradient(
    top,
    rgba(254, 243, 243, 1),
    rgba(255, 255, 255, 1)
  );
  background: -moz-linear-gradient(
    top,
    rgba(254, 243, 243, 1),
    rgba(255, 255, 255, 1)
  );
  background: linear-gradient(
    to bottom,
    rgba(254, 243, 243, 1),
    rgba(255, 255, 255, 1)
  );
`;
export const StyledList = styled.div`
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  @media only screen and (max-width: 1024px) {
    margin-top: 10rem;
  }
`;

export const MenuImage = styled.div`
  background-image: url(${menu});

  background-repeat: no-repeat;
  background-size: cover;
  height: 27vh;

  width: 100%;
  @media only screen and (min-width: 768px) {
    background-position: center;
    height: 40vh;
  }

  //border-bottom-left-radius: 2rem;
  //border-bottom-right-radius: 2rem;
`;

export const MenuCategoryLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  text-decoration: none;

  :hover {
    border-radius: 4rem;
    background: #ff1c48;
  }
  h2:hover {
    color: white;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }
`;
export const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    width: 50%;
  }
  @media only screen and (min-width: 1000px) {
    width: 33%;
  }
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

  background: white;

  :first-child {
    margin-top: 10rem;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
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
  align-items: ${({ admin }) => (admin ? "center" : "")};
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }
`;
export const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 3rem;

  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const CategoryImg = styled.div`
  background-image: url(${categoryimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  //border-bottom-left-radius: 2rem;
  //border-bottom-right-radius: 2rem;
  margin-bottom: 2em;
  p {
    margin-right: 2em;
    font-family: sans-serif;
    color: white;
    font-size: 1.5em;
    letter-spacing: 0.2em;
  }
  h6 {
    text-align: center;
    color: white;
    font-family: sans-serif;
    font-size: 0.8em;
  }
`;
export const CartButton = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "30px" : "5px")};
  background-color: ${({ primary }) =>
    primary ? "transparent" : "transparent"};
  color: ${({ primary }) => (primary ? "#fff" : "#fff")};
  padding: ${({ big }) => (big ? "18px 30px" : "9px 12px")};
  font-size: ${({ bigFont }) => (bigFont ? "20px" : "2.5rem")};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
  font-weight: 500;
  font-family: "Be Vietnam Pro";
  min-width: ${({ admin }) => (admin ? "75px" : "0px")};
  max-width: ${({ admin }) => (admin ? "" : "100px")};

  &:hover {
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

  width: 92%;
  min-height: 16rem;
  border-radius: 10px;

  margin-bottom: 20px;

  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    width: 45%;
    flex-direction: column;
    height: 40vh;
  }
  @media only screen and (min-width: 1000px) {
    flex-direction: column;
    height: 50vh;
    width: 45%;
    margin: 2rem;
  }
  @media only screen and (min-width: 1400px) {
    flex-direction: column;
    height: auto;
    width: 35%;
    margin: 2rem;
  }

  :hover {
    background: white;
  }
`;

export const MenuProductName = styled.h2`
  color: #000000ad;
  font-weight: 500;

  padding-top: 1rem;
  text-align: left;
  margin-bottom: 2rem;
  width: 100%;

  margin-top: ${({ Account }) => (Account ? "10rem" : "2rem")};
  font-size: ${({ adminAccount }) => (adminAccount ? "1.5em" : "1.5em")};
  @media only screen and (min-width: 1024px) {
    text-align: center;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.5em;
    width: 70%;
    padding-top: 4rem;
    text-align: center;
  }
  @media only screen and (max-width: 767px) {
    font-size: 1.2em;
    margin-top: 2rem;
    width: 70%;
    margin-left: 2rem;
    font-weight: 500;
  }
  @media only screen and (max-width: 360px) {
    margin-top: 5rem;
    font-size: 1em;
  }
`;

export const CategoryIconImage = styled.img`
  border-radius: 3rem;
  background: white;
  margin-left: 2rem;
  padding: 5px;
  @media only screen and (min-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`;
