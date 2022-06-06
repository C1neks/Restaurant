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
  MainText,
  MainBtn,
  MainFooter,
  MainAboutUsContainer,
  AboutTextContainer,
} from "./Main.styles";
import { Spacer } from "../Account/Account.styles";

const Main = () => {
  return (
    <div>
      <MainContainer>
        <MainContent>
          <MainContentText>
            <MainTitle>
              <MainTitleText>Food is our passion</MainTitleText>
            </MainTitle>
            <MainSubTitle>Nullam interdum quam</MainSubTitle>
            <MainText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc
              feugiat finibus
            </MainText>
            <MainBtn to="/menu">
              <Button primary big bigFont bigRadius>
                Pick your meals
              </Button>
            </MainBtn>
          </MainContentText>
        </MainContent>
      </MainContainer>
      <Spacer></Spacer>
      <AboutTextContainer>
        <h1>About Us</h1>
      </AboutTextContainer>
      <Spacer></Spacer>
      <MainAboutUsContainer>
        <MainContent>
          <MainContentText primary about>
            <MainTitle>
              <MainTitleText>
                We prepare food from the fresh local products
              </MainTitleText>
            </MainTitle>
          </MainContentText>
        </MainContent>
      </MainAboutUsContainer>
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
    </div>
  );
};

export default Main;
