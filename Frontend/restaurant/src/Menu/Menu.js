import React, { useState, useEffect, useContext } from "react";
import wołowe from "../images/burger.png";
import pizza from "../images/pizza.png";
import drobiowe from "../images/drobiowe.png";
import makarony from "../images/makarony.png";
import sałatki from "../images/sałatki.png";
import vege from "../images/vege.png";
import {
  StyledList,
  Wrapper,
  Category,
  MenuImage,
  MenuCategoryLink,
  MenuProductName,
  CategoryIconImage,
} from "./Menu.styles";

import { ItemsContext } from "../App";
import { MainFooter, MainSubTitle } from "../Main/Main.styles";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaStar,
  FaTripadvisor,
} from "react-icons/fa";
import { Spacer } from "../Account/Account.styles";
import { categoryService, productService } from "../services/services";
import { MenuLink } from "../NavBar/Navbar.styles";
import CategoryImage from "../CategoryImage.js/CategoryImage";
import Basket from "../Basket/Basket";
import { IconContext } from "react-icons";
import Image from "../Image/Image";

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
        {/*<MenuImage />*/}
        {context.cartItems.length === 0 ? null : <Basket />}

        {category.map((repos) => (
          <Category key={repos._id}>
            <Spacer></Spacer>

            <MenuCategoryLink
              to="category"
              name={repos.name}
              onClick={() => setCat(repos.name)}
            >
              {repos.name === "pizza" ? (
                <CategoryIconImage src={`${pizza}`} />
              ) : repos.name === "wołowe" ? (
                <CategoryIconImage src={`${wołowe}`} />
              ) : repos.name === "sałatki" ? (
                <CategoryIconImage src={`${sałatki}`} />
              ) : repos.name === "vege" ? (
                <CategoryIconImage src={`${vege}`} />
              ) : repos.name === "drobiowe" ? (
                <CategoryIconImage src={`${drobiowe}`} />
              ) : repos.name === "makarony" ? (
                <CategoryIconImage src={`${makarony}`} />
              ) : (
                <CategoryIconImage src={`${pizza}`} />
              )}
              <MenuProductName>{repos.name.toUpperCase()}</MenuProductName>
            </MenuCategoryLink>
          </Category>
        ))}
      </StyledList>
      <IconContext.Provider value={{ color: "black", size: 35 }}>
        <MainFooter>
          <a href="https://www.facebook.com/">
            <FaFacebookSquare style={{ margin: "1rem" }} />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagramSquare style={{ margin: "1rem" }} />
          </a>
          <a href="https://www.tripadvisor.com/">
            <FaTripadvisor style={{ margin: "1rem" }} />
          </a>
          <p>Copyright © 2021-2022 by Smakosz.</p>
        </MainFooter>
      </IconContext.Provider>
    </Wrapper>
  );
};

export default Menu;
