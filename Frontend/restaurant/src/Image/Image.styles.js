import styled from "styled-components";

export const PrdctImg = styled.div`
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
