import React from "react";
import GlobalStyles from "../GlobalStyles";
import { Button } from "../StyledComponents/Button";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTripadvisor,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  MainContainer,
  MainContent,
  MainContentText,
  MainTitle,
  MainTitleText,
  MainSubTitle,
  MainBtn,
  MainFooter,
  MainContentWithImage,
  BannerContainer,
  DeliveryDiv,
  WaitressDiv,
  OrderDiv,
  Serve,
  DeliveryPartner,
  IconsContainer,
  UnderIconsText,
} from "./Main.styles";
import { Spacer } from "../Account/Account.styles";

const Main: React.FC = () => {
  return (
    <div>
      <MainContainer>
        <MainContent>
          <MainContentText>
            <MainTitle>
              <MainTitleText>
                Be The Fastest In Delivering Your Food
              </MainTitleText>
            </MainTitle>
            <MainSubTitle>
              Our job is to filling your tummy with delicious food and with fast
              and free delivery
            </MainSubTitle>

            <MainBtn to="/menu">
              <Button primary big bigFont bigRadius>
                Pick your meals
              </Button>
            </MainBtn>
          </MainContentText>
        </MainContent>
        <MainContentWithImage />
      </MainContainer>
      <Spacer />
      <BannerContainer>
        <Serve>WHAT WE SERVE</Serve>
        <DeliveryPartner>Your Favourite Food</DeliveryPartner>
        <DeliveryPartner>Delivery Partner</DeliveryPartner>
        <IconsContainer>
          <OrderDiv />
          <UnderIconsText primary>Easy To Order</UnderIconsText>
          <UnderIconsText>
            You only need a few steps in ordering food.
          </UnderIconsText>
        </IconsContainer>
        <IconsContainer>
          <DeliveryDiv />
          <UnderIconsText primary>Fastest Delivery</UnderIconsText>
          <UnderIconsText>
            Delivery that is always ontime even faster.
          </UnderIconsText>
        </IconsContainer>
        <IconsContainer>
          <WaitressDiv />
          <UnderIconsText primary>Best Quality</UnderIconsText>
          <UnderIconsText>
            Not only fast for us quality is also number one.
          </UnderIconsText>
        </IconsContainer>
      </BannerContainer>
      <IconContext.Provider value={{ color: "black", size: "35" }}>
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
    </div>
  );
};

export default Main;
