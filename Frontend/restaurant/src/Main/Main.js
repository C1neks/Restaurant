import React from "react";
import GlobalStyles from "../GlobalStyles";
import { Button } from "../StyledComponents/Button";
import {
  MainContainer,
  MainContent,
  MainContentText,
  MainTitle,
  MainTitleText,
  MainSubTitle,
  MainText,
  MainBtn,
} from "./Main.styles";

const Main = () => {
  return (
    <div>
      <MainContainer>
        <MainContent>
          <MainContentText>
            <MainTitle>
              <MainTitleText>Lorem</MainTitleText>
              <MainTitleText>Lorem And Ipsum</MainTitleText>
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
    </div>
  );
};

export default Main;
