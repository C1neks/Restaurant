import styled from "styled-components";
import { Link } from "react-router-dom";
import ImgBg from "../images/mainimage2.jpg";
import ImgAboutUs from "../images/aboutus.jpg";

export const MainContainer = styled.div`
  background-image: linear-gradient(
      to top right,
      rgba(11, 10, 10, 0.38),
      rgba(11, 10, 10, 0.19)
    ),
    url(${ImgBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 92vh;
  @media only screen and (max-width: 1600px) {
    height: 85vh;
  }
`;

export const MainAboutUsContainer = styled.div`
  background-image: linear-gradient(
      to top right,
      rgba(11, 10, 10, 0.38),
      rgba(11, 10, 10, 0.19)
    ),
    url(${ImgAboutUs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  height: 67vh;
  @media only screen and (min-width: 1600px) {
    height: 92vh;
  }
`;

export const MainContent = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fffefe;
  @media only screen and (max-width: 375px) {
    text-align: start;
    height: 80%;
  }
`;

export const MainContentText = styled.div`
  width: 50%;
  padding-top: ${({ primary }) => (primary ? "0rem" : "5rem")};
  //padding-top: 5rem;
  margin: ${({ about }) => (about ? "4rem 0rem 4rem 0rem" : "0rem")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
  @media only screen and (max-width: 375px) {
    position: absolute;
    align-items: flex-start;
  }
`;

export const MainTitle = styled.h1`
  font-size: clamp(1rem, 10vw, 5rem);
  font-weight: 900;
  letter-spacing: 0.5rem;
  line-height: 1.3;
`;

export const MainTitleText = styled.span`
  display: block;
`;

export const MainSubTitle = styled.h2`
  //font-size: clamp(2rem, 3vw, 4rem);
  font-weight: 300;
  letter-spacing: 1rem;
  padding-top: 1rem;
  text-align: center;
  font-size: ${({ adminAccount }) =>
    adminAccount ? "1.5em" : "clamp(2rem, 3vw, 4rem)"};
`;

export const MainText = styled.h3`
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-weight: 400;
  padding: 2.5rem 2rem;
  @media only screen and (max-width: 375px) {
    padding: 1.5rem 0;
  }
`;

export const MainFooter = styled.div`
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
  min-height: 120px;
`;
export const AboutTextContainer = styled.div`
  text-align: center;
`;
export const AboutText = styled.h1``;
export const MainBtn = styled(Link)`
  text-decoration: none;
  outline: none;
  border: none;
`;
