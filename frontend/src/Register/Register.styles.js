import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
`;

export const RegisterTitle = styled.h2`
  color: #000000ad;
  font-weight: 300;

  padding-top: 1rem;
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
  margin-top: ${({ Account }) => (Account ? "10rem" : "2rem")};
  font-size: ${({ adminAccount }) => (adminAccount ? "1.5em" : "1.5em")};
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.5em;

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

export const RegisterContainer = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5em;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
