import React, { useContext, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import GlobalStyles from "../GlobalStyles";
import { Button } from "../StyledComponents/Button";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  MenuItemBtn,
  MenuLinkBtn,
} from "./Navbar.styles";
import CartCount from "../Basket/CartCount";
import { LoggedContext } from "../App";

const Navbar = ({ countCartItems, handleLogout, userDetails }) => {
  const [click, setClick] = useState(false);
  const context = useContext(LoggedContext);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <Nav>
        <NavbarContainer>
          {window.location.pathname === "/" ? (
            <NavLogo main to="/">
              <NavIcon />
              <p>Smakosz</p>
            </NavLogo>
          ) : (
            <NavLogo to="/">
              <NavIcon />
              <p>Smakosz</p>
            </NavLogo>
          )}
          {window.location.pathname === "/" ? (
            <MenuIcon main onClick={handleClick}>
              {click ? <BiX /> : <BiMenu />}
            </MenuIcon>
          ) : (
            <MenuIcon onClick={handleClick}>
              {click ? <BiX /> : <BiMenu />}
            </MenuIcon>
          )}

          <Menu onClick={handleClick} click={click}>
            <MenuItem>
              <MenuLink to="/">Home</MenuLink>
            </MenuItem>
            <MenuItem>
              {userDetails.isAdmin === true ? (
                <MenuLink key={userDetails._id} to="/admin">
                  Admin Panel
                </MenuLink>
              ) : null}
            </MenuItem>
            <MenuItem>
              <MenuLink to="/menu">
                <CartCount countCartItems={countCartItems} />
              </MenuLink>
            </MenuItem>
            <MenuItem>
              {context.logged ? (
                <MenuLink to="/" onClick={() => handleLogout()}>
                  Logout
                </MenuLink>
              ) : (
                <MenuLink to="/register">Login</MenuLink>
              )}
            </MenuItem>
            <MenuItem>
              <MenuLink to="/account">My Account</MenuLink>
            </MenuItem>
            <MenuItemBtn>
              <MenuLinkBtn to="/menu">
                <Button primary bigFont>
                  Order Now
                </Button>
              </MenuLinkBtn>
            </MenuItemBtn>
          </Menu>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
