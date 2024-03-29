import React, { useContext, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

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
  MenuItemCartButton,
} from "./Navbar.styles";
import CartCount from "../Basket/CartCount";
import { LoggedContext } from "../App";
import { UserDetails } from "../models/models";

interface Props {
  countCartItems: number;
  handleLogout: () => void;
  userDetails: UserDetails;
}

const Navbar: React.FC<Props> = ({
  countCartItems,
  handleLogout,
  userDetails,
}) => {
  const [click, setClick] = useState(false);
  const context = useContext(LoggedContext);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <Nav>
        <NavbarContainer onClick={handleClick}>
          <>
            <NavLogo main to="/">
              <NavIcon />
              <p>Smakosz</p>
            </NavLogo>
            <MenuIcon main onClick={handleClick}>
              {click ? <BiX /> : <BiMenu />}
            </MenuIcon>
            <Menu onClick={handleClick} click={click}>
              <MenuItem>
                <MenuLink main to="/">
                  Home
                </MenuLink>
              </MenuItem>
              <MenuItem>
                {userDetails.isAdmin ? (
                  <MenuLink main key={userDetails._id} to="/admin">
                    Admin Panel
                  </MenuLink>
                ) : null}
              </MenuItem>

              <MenuItem>
                {context.logged ? (
                  <MenuLink main to="/" onClick={() => handleLogout()}>
                    Logout
                  </MenuLink>
                ) : (
                  <MenuLink main to="/register">
                    Login
                  </MenuLink>
                )}
              </MenuItem>
              <MenuItem>
                <MenuLink main to="/account">
                  My Account
                </MenuLink>
              </MenuItem>

              <MenuItemCartButton>
                <MenuItem>
                  <MenuLink cart main to="/menu">
                    <CartCount countCartItems={countCartItems} />
                  </MenuLink>
                </MenuItem>

                <MenuItemBtn>
                  <MenuLinkBtn cart to="/menu">
                    <Button primary bigFont>
                      Order Now
                    </Button>
                  </MenuLinkBtn>
                </MenuItemBtn>
              </MenuItemCartButton>
            </Menu>
          </>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
