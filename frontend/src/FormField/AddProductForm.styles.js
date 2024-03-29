import styled from "styled-components";

export const Container = styled.div`
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

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ShadowContainer = styled.div`
  box-shadow: 0px 0px 15px -3px rgb(41 22 22 / 34%);
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 1rem;

  min-height: 35rem;
`;
