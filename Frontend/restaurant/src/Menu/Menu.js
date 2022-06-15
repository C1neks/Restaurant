import React, { useState, useEffect, useContext } from "react";

import {
  StyledList,
  Wrapper,
  Category,
  MenuImage,
  MenuCategoryLink,
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
        <MenuImage />
        {context.cartItems.length === 0 ? <div></div> : <Basket />}

        {category.map((repos) => (
          <Category key={repos._id}>
            <MainSubTitle>{repos.name.toUpperCase()}</MainSubTitle>
            <Spacer></Spacer>

            <MenuCategoryLink
              to="category"
              name={repos.name}
              onClick={() => setCat(repos.name)}
            >
              <div>
                {repos.products[0].image ? (
                  <CategoryImage image={repos.products[0].image} />
                ) : null}
              </div>
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
