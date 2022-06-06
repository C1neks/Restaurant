import React, { useContext, useEffect, useState } from "react";
import {
  categoryService,
  opinionService,
  productService,
} from "../services/services";
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
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { ItemsContext } from "../App";
import { MainSubTitle } from "../Main/Main.styles";
import Opinion from "../Opinion/Opinion";
import Image from "../Image/Image";
import { PriceDollarSignContainer } from "./Product.styles";

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
      <CategoryImg>
        <div>
          <p>{cat.toUpperCase()}</p>
          <h6>{productCategory.length + " " + "items"}</h6>
        </div>
      </CategoryImg>
      {/*<MainSubTitle>{cat.toUpperCase()}</MainSubTitle>*/}
      <ItemWrapper>
        {productCategory.map((m) => (
          <Item key={m._id}>
            <Image image={m.image} />

            <ItemDetails>
              <Details>
                <h3>{m.name}</h3>
                <Opinion
                  productId={m._id}
                  usersVoted={m.usersVoted}
                  getCategories={getCategories}
                />
                <p>{m.description}</p>
              </Details>
              {userDetails.isAdmin === false ? (
                <PriceAndButtonContainer>
                  <PriceDollarSignContainer>
                    <h2>
                      <HiOutlineCurrencyDollar />
                    </h2>
                    <h3>{m.price}</h3>
                  </PriceDollarSignContainer>

                  <CartButton onClick={() => context.onAddToCart(m)}>
                    Add to Cart
                  </CartButton>
                </PriceAndButtonContainer>
              ) : (
                <PriceAndButtonContainer admin>
                  <PriceDollarSignContainer>
                    <h2>
                      <HiOutlineCurrencyDollar />
                    </h2>
                    <h3>{m.price}</h3>
                  </PriceDollarSignContainer>

                  <CartButton admin onClick={() => context.onAddToCart(m)}>
                    Cart
                  </CartButton>

                  {userDetails.isAdmin === false ? null : (
                    <CartButton admin onClick={() => deleteProduct(m._id)}>
                      Delete
                    </CartButton>
                  )}
                </PriceAndButtonContainer>
              )}
            </ItemDetails>
          </Item>
        ))}
      </ItemWrapper>
    </Wrapper>
  );
};

export default Product;
