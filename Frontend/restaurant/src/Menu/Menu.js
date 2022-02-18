import React, { useState, useEffect, useContext } from "react";
import Opinion from "../Opinion/Opinion";
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

const Menu = () => {
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
            <CategoryName>{repos.name.toUpperCase()}</CategoryName>
            <ItemWrapper>
              {repos.products.map((m) =>
                m.category === repos.name ? (
                  <Item key={m._id}>
                    <h2>{m.name}</h2>
                    <h3>{m.price}</h3>
                    <p>{m.description}</p>
                    <Button onClick={() => deleteProduct(m._id)}>Delete</Button>
                    <Button onClick={() => context.onAddToCart(m)}>
                      Add to Cart
                    </Button>
                    <Opinion productId={m._id} />
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
