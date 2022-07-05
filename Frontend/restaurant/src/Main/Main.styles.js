import styled from "styled-components";
import { Link } from "react-router-dom";
import ImgBg from "../images/background-photo.png";
import ImgAboutUs from "../images/aboutus.jpg";
import Banner from "../images/bannerfinal.png";
import Delivery from "../images/delivery.png";
import Waitress from "../images/waitress.png";
import Order from "../images/easytorder.png";
export const MainContainer = styled.div`
  background: rgba(254, 243, 243, 1);
  background: -webkit-linear-gradient(
    top,
    rgba(254, 243, 243, 1),
    rgba(255, 255, 255, 1)
  );
  background: -moz-linear-gradient(
    top,
    rgba(254, 243, 243, 1),
    rgba(255, 255, 255, 1)
  );
  background: linear-gradient(
    to bottom,
    rgba(254, 243, 243, 1),
    rgba(255, 255, 255, 1)
  );
  display: flex;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  min-height: 70vh;
  @media only screen and (min-width: 1024px) {
    min-height: 100rem;
  }
  @media only screen and (min-width: 768px) {
    min-height: 70vh;
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
  height: 80vh;
  @media only screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export const MainContent = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  color: #fffefe;
  margin-top: 25rem;

  @media only screen and (max-width: 1000px) {
    background-image: url(${ImgBg});

    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    background-image: url(${ImgBg});

    background-position: center;
    background-repeat: no-repeat;
    background-size: 130%;
    margin-top: 0;
    height: auto;
  }
`;

export const MainContentWithImage = styled.section`
  background-image: url(${ImgBg});

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 160%;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  color: #fffefe;
  margin-top: 5rem;
  min-height: 1000px;
  @media only screen and (min-width: 1800px) {
    background-size: cover;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const MainContentText = styled.div`
  padding-top: ${({ primary }) => (primary ? "0rem" : "5rem")};
  //padding-top: 5rem;
  margin: ${({ about }) => (about ? "4rem 0rem 4rem 0rem" : "0rem")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-left: 10rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 5rem;

    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const MainTitle = styled.h1`
  font-weight: 900;

  line-height: 1.3;
  @media only screen and (max-width: 768px) {
    font-weight: 800;
    width: 100%;
  }
`;

export const MainTitleText = styled.span`
  display: block;
  font-size: 8rem;
  color: #000000c9;
  @media only screen and (max-width: 768px) {
    display: block;
    font-size: 3rem;
    color: #000000c9;
    padding-top: 4rem;
    width: 50%;
    margin-left: 2rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 5rem;
    padding-top: 0rem;
    margin-left: 2rem;
  }
  @media (max-width: 600px) {
    margin-left: 1rem;
  }
`;

export const MainSubTitle = styled.h2`
  color: #000000ad;
  font-weight: 300;

  padding-top: 1rem;
  text-align: left;
  margin-bottom: 2rem;
  width: 100%;
  margin-top: ${({ Account }) => (Account ? "10rem" : "2rem")};
  font-size: ${({ adminAccount }) => (adminAccount ? "1.5em" : "1.5em")};
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.5em;
    width: 70%;
    padding-top: 18rem;
  }
  @media only screen and (max-width: 767px) {
    font-size: 1.2em;
    margin-top: 10rem;
    width: 70%;
  }
  @media only screen and (max-width: 360px) {
    margin-top: 5rem;
    font-size: 1em;
  }
`;

export const MainText = styled.h3`
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-weight: 400;
  padding: 2.5rem 2rem;
`;

export const MainFooter = styled.div`
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
  min-height: 120px;
  width: 100%;
`;
export const AboutTextContainer = styled.div`
  text-align: center;
`;

export const MainBtn = styled(Link)`
  text-decoration: none;
  outline: none;
  border: none;
  @media only screen and (max-width: 768px) {
    margin-top: 8rem;
  }
  @media only screen and (max-width: 360px) {
    margin-top: 0rem;
  }
`;

export const BannerContainer = styled.div`
  // background-image: url(${Banner});
  // width: 100%;
  // height: 75vh;
  // background-repeat: no-repeat;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const DeliveryDiv = styled.div`
  background-image: url(${Delivery});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 100%;
  height: 30rem;
`;

export const WaitressDiv = styled.div`
  background-image: url(${Waitress});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 100%;
  height: 30rem;
`;
export const OrderDiv = styled.div`
  background-image: url(${Order});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 30rem;
  @media only screen and (max-width: 768px) {
    background-size: 90%;
  }
`;

export const Serve = styled.span`
  width: 100%;
  text-align: center;
  font-size: 2.1rem;
  letter-spacing: 0.3rem;
  color: #f55152;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const DeliveryPartner = styled.span`
  width: 100%;
  font-size: 6rem;
  text-align: center;
  font-weight: 700;
  color: #000000c9;
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const UnderIconsText = styled.span`
  font-size: ${({ primary }) => (primary ? "3rem" : "2rem")};
  font-weight: ${({ primary }) => (primary ? "700" : "400")};

  color: ${({ primary }) => (primary ? "#000000c9" : "#000000ad")};
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
