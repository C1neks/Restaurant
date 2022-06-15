import styled from "styled-components";

export const PriceDollarSignContainer = styled.div`
  display: flex;
`;

export const ProductNameSign = styled.h3`
  letter-spacing: 0.1rem;
  color: black;
`;

export const ContainerOfButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media only screen and (min-width: 768px) {
    display: flex;

    align-items: center;

    width: 100%;
    justify-content: space-evenly;
    flex-direction: row;
    margin-bottom: 2rem;
  }
`;
