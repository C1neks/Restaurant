import styled from "styled-components";

export const PriceDollarSignContainer = styled.div`
  display: flex;
  justify-content: left;
  color: white;
  font-size: 4rem;
  width: 100%;
`;

export const ProductNameSign = styled.h3`
  color: white;
  font-size: 5rem;
  font-weight: 400;
`;

export const ContainerOfButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  margin-bottom: 2rem;

  @media only screen and (min-width: 768px) {
    display: flex;

    align-items: center;

    width: 100%;
    justify-content: left;
    flex-direction: row;
    margin-bottom: 2rem;
  }
`;

export const DescriptionP = styled.p`
  font-size: 2rem;
  color: white;
`;
