import styled from "styled-components";

export const ProductImage = styled.img`
  width: 14.5rem;
  height: 14rem;
  border-radius: 10px;
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 30rem;
  }
`;
export const TestImg = styled.div`
  width: 100%;
  height: 70vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.image});
  display: flex;
  justify-content: left;
  align-items: end;
  border-radius: 4rem;
`;
