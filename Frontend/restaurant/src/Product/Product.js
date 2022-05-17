import React, { useContext, useEffect, useState } from "react";
import { categoryService, productService } from "../services/services";
import {
  CartButton,
  CategoryImg,
  Details,
  Item,
  ItemDetails,
  ItemWrapper,
  PriceAndButtonContainer,
  Wrapper,
} from "../Menu/Menu.styles";

import { ItemsContext } from "../App";
import { MainSubTitle } from "../Main/Main.styles";
import Opinion from "../Opinion/Opinion";
import Image from "../Image/Image";

const Product = ({ cat, userDetails }) => {
  const context = useContext(ItemsContext);
  const [productCategory, setProductCategory] = useState([]);

  const getCategories = async () => {
    const response = await categoryService.getAll();

    const myCategory = response.data.data;
    const category = myCategory.find((c) => c.name === cat);

    setProductCategory(category.products);
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
      <CategoryImg />
      <MainSubTitle>{cat.toUpperCase()}</MainSubTitle>
      <ItemWrapper>
        {productCategory.map((m) => (
          <Item key={m._id}>
            <Image image={m.image} />

            <ItemDetails>
              <Details>
                <h2>{m.name}</h2>

                {/*<Opinion*/}
                {/*  productId={m._id}*/}
                {/*  usersVoted={m.usersVoted}*/}
                {/*  getCategories={getCategories}*/}
                {/*/>*/}
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
        ))}
      </ItemWrapper>
    </Wrapper>
  );
};

export default Product;
