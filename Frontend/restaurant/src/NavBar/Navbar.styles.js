import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiRestaurant } from "react-icons/bi";
import { Container } from "../StyledComponents/Container";

export const Nav = styled.nav`
  font-size: 18px;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 999;
  height: 80px;
  color: black;
  //box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  ${Container};
`;

export const NavLogo = styled(Link)`
  color: #2e2e2e;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 800;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.08);
  }
`;

export const NavIcon = styled(BiRestaurant)`
  margin-right: 0.8rem;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(2);
  }
`;

export const MenuIcon = styled.div`
  display: none;
  color: ${({ main }) => (main ? "black" : "black")};
  @media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? "0" : "-100%")};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    color: ${({ main }) => (main ? "white" : "black")};
    &:hover {
      border: none;
      font-size: 1.5rem;
    }
  }
  @media only screen and (min-width: 1000px) {
    &:hover {
      border: none;
      font-size: 1.5rem;
    }
  }
`;

export const MenuItemCartButton = styled.li`
  list-style: none;
  height: 80px;
  display: flex;
  position: absolute;
  right: 0;

  @media only screen and (max-width: 1100px) {
    color: ${({ main }) => (main ? "white" : "black")};
    &:hover {
      border: none;
      font-size: 1.5rem;
    }
  }
  @media only screen and (min-width: 1100px) {
    margin-right: 5rem;
    &:hover {
      border: none;
      font-size: 1.5rem;
    }
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 2rem;
  color: #2e2e2e;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: ${({ cart }) => (cart ? "0 16px 0 0" : "1rem 2rem")};
  height: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  @media only screen and (min-width: 1000px) {
    &:hover {
      border: none;
      font-size: 2.5rem;
    }
  }

  &:hover {
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: #e38b06;
  }

  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;

export const MenuItemBtn = styled.li`
  list-style: none;

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
    position: relative;
  }
`;

export const MenuLinkBtn = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: ${({ cart }) => (cart ? "0 0 0 0" : "8px 16px")};
`;
