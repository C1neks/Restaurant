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
import { MainFooter, MainSubTitle } from "../Main/Main.styles";
import Opinion from "../Opinion/Opinion";
import Image from "../Image/Image";
import {
  ContainerOfButtons,
  DescriptionP,
  PriceDollarSignContainer,
  ProductNameSign,
} from "./Product.styles";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTripadvisor,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { TestImg } from "../Image/Image.styles";

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
      <ItemWrapper>
        {productCategory.map((m) => (
          <Item key={m._id}>
            <TestImg image={m.image}>
              <ItemDetails>
                <Details>
                  <ProductNameSign>{m.name}</ProductNameSign>
                  <Opinion
                    userDetails={userDetails}
                    productId={m._id}
                    usersVoted={m.usersVoted}
                    getCategories={getCategories}
                  />
                  <DescriptionP>{m.description}</DescriptionP>
                </Details>
                {userDetails.isAdmin === false ? (
                  <PriceAndButtonContainer>
                    <PriceDollarSignContainer>
                      <h2>
                        <HiOutlineCurrencyDollar />
                      </h2>
                      <h3>{m.price}</h3>
                    </PriceDollarSignContainer>
                    <ContainerOfButtons>
                      <CartButton onClick={() => context.onAddToCart(m)}>
                        Add to Cart
                      </CartButton>
                    </ContainerOfButtons>
                  </PriceAndButtonContainer>
                ) : (
                  <PriceAndButtonContainer admin>
                    <PriceDollarSignContainer>
                      <h2>
                        <HiOutlineCurrencyDollar />
                      </h2>
                      <h3>{m.price}</h3>
                    </PriceDollarSignContainer>

                    {userDetails.isAdmin === false ? (
                      <ContainerOfButtons>
                        <CartButton
                          admin
                          onClick={() => context.onAddToCart(m)}
                        >
                          Cart
                        </CartButton>
                      </ContainerOfButtons>
                    ) : (
                      <ContainerOfButtons>
                        <CartButton
                          admin
                          onClick={() => context.onAddToCart(m)}
                        >
                          Cart
                        </CartButton>
                        <CartButton admin onClick={() => deleteProduct(m._id)}>
                          Delete
                        </CartButton>
                      </ContainerOfButtons>
                    )}
                  </PriceAndButtonContainer>
                )}
              </ItemDetails>
            </TestImg>
          </Item>
        ))}
      </ItemWrapper>
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

export default Product;
