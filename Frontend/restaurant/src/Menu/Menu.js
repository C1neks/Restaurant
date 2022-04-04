import React, { useState, useEffect, useContext } from "react";

import axios from "axios";

import {
  StyledList,
  Wrapper,
  Item,
  Category,
  ItemWrapper,
  CategoryName,
  ItemDetails,
  ItemImg,
  Details,
  CartButton,
  PriceAndButtonContainer,
  MenuText,
  CategoryItemImg,
} from "./Menu.styles";
import { Button } from "../StyledComponents/Button";
import { ItemsContext } from "../App";
import { MainSubTitle, MainTitleText } from "../Main/Main.styles";
import { FaStar } from "react-icons/fa";
import { Spacer } from "../Account/Account.styles";
import { categoryService, productService } from "../services/services";
import { MenuLink } from "../NavBar/Navbar.styles";

const Menu = ({ userDetails, setCat }) => {
  const context = useContext(ItemsContext);
  const [category, setCategory] = useState([]);

  const getCategories = async () => {
    const response = await categoryService.getAll();

    const myCategory = response.data.data;
    setCategory(myCategory);
  };

  const deleteProduct = async (id) => {
    const response = await productService.deleteProduct(id);

    getCategories();
  };
  useEffect(() => {
    (async () => {
      await getCategories();
    })();
  }, []);

  return (
    <Wrapper>
      <StyledList>
        <MenuText>Menu</MenuText>

        {category.map((repos) => (
          <Category key={repos._id}>
            <MainSubTitle>{repos.name.toUpperCase()}</MainSubTitle>
            <Spacer></Spacer>

            <MenuLink
              to="category"
              name={repos.name}
              onClick={() => setCat(repos.name)}
            >
              <CategoryItemImg />
            </MenuLink>
          </Category>
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default Menu;
