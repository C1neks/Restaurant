import React, { useState, useEffect, useContext } from "react";

import axios from "axios";

import {
  StyledList,
  Wrapper,
  Item,
  Category,
  ItemWrapper,
  CategoryName,
} from "./Menu.styles";
import { Button } from "../StyledComponents/Button";
import { ItemsContext } from "../App";
import { MainSubTitle } from "../Main/Main.styles";

const Menu = ({ userDetails }) => {
  const context = useContext(ItemsContext);
  const [category, setCategory] = useState([]);

  const getCategories = () => {
    axios.get("http://localhost:4000/categories").then((response) => {
      console.log(response.data.data);
      const myCategory = response.data.data;
      setCategory(myCategory);
    });
  };

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:4000/products/${id}`).then((response) => {
      console.log(response.data.data);
      getCategories();
    });
  };

  useEffect(() => getCategories(), []);

  return (
    <Wrapper>
      <StyledList>
        {category.map((repos) => (
          <Category key={repos._id}>
            <MainSubTitle>{repos.name.toUpperCase()}</MainSubTitle>
            <ItemWrapper>
              {repos.products.map((m) =>
                m.category === repos.name ? (
                  <Item key={m._id}>
                    <h2>{m.name}</h2>
                    <h3>{m.price}</h3>
                    <p>{m.description}</p>
                    {userDetails.map((user) =>
                      user.isAdmin === false ? (
                        <Button onClick={() => context.onAddToCart(m)}>
                          Add to Cart
                        </Button>
                      ) : (
                        <>
                          <Button onClick={() => context.onAddToCart(m)}>
                            Add to Cart
                          </Button>
                          <Button onClick={() => deleteProduct(m._id)}>
                            Delete
                          </Button>
                        </>
                      )
                    )}
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
