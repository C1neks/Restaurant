import React, { useState } from "react";
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

const Navbar = (props) => {
  const { countCartItems } = props;
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            Smakosz
          </NavLogo>
          <MenuIcon onClick={handleClick}>
            {click ? <BiX /> : <BiMenu />}
          </MenuIcon>

          <Menu onClick={handleClick} click={click}>
            <MenuItem>
              <MenuLink to="/">Home</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/addProducts">addProducts</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/menu">
                <CartCount countCartItems={countCartItems} />
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/register">Login</MenuLink>
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
