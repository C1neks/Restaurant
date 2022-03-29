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
} from "./Menu.styles";
import { Button } from "../StyledComponents/Button";
import { ItemsContext } from "../App";
import { MainSubTitle, MainTitleText } from "../Main/Main.styles";
import { FaStar } from "react-icons/fa";
import { Spacer } from "../Account/Account.styles";
import { categoryService, productService } from "../services/services";

const Menu = ({ userDetails }) => {
  const context = useContext(ItemsContext);
  const [category, setCategory] = useState([]);

  const getCategories = () => {
    categoryService.getAll().then((response) => {
      console.log(response.data.data);
      const myCategory = response.data.data;
      setCategory(myCategory);
    });
  };

  const deleteProduct = (id) => {
    productService.deleteProduct(id).then((response) => {
      console.log(response.data.data);
      getCategories();
    });
  };

  useEffect(() => getCategories(), []);

  return (
    <Wrapper>
      <StyledList>
        <MenuText>Menu</MenuText>

        {category.map((repos) => (
          <Category key={repos._id}>
            <MainSubTitle>{repos.name.toUpperCase()}</MainSubTitle>
            <Spacer></Spacer>
            <ItemWrapper>
              {repos.products.map((m) =>
                m.category === repos.name ? (
                  <Item key={m._id}>
                    <ItemImg />

                    <ItemDetails>
                      <Details>
                        <h2>{m.name}</h2>
                        <FaStar color="orange" size={15} />
                        <p>{m.description}</p>
                      </Details>
                      <PriceAndButtonContainer>
                        <h3>{m.price + "$"}</h3>

                        <CartButton onClick={() => context.onAddToCart(m)}>
                          Add to Cart
                        </CartButton>

                        {userDetails.isAdmin === false ? null : (
                          <CartButton onClick={() => deleteProduct(m._id)}>
                            Delete
                          </CartButton>
                        )}
                      </PriceAndButtonContainer>
                    </ItemDetails>
                  </Item>
                ) : null
              )}
            </ItemWrapper>
          </Category>
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default Menu;
