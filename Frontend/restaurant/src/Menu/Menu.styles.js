import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #282a35;
  width: 100%;
`;
export const StyledList = styled.div`
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }
`;
export const CategoryName = styled.h2`
  font-size: clamp(1rem, 10vw, 5rem);
  font-weight: 900;
  letter-spacing: 0.5rem;
  line-height: 1.3;
  color: #fff;
`;
export const Item = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  margin: 20px;
  width: 25%;
  height: 500px;
  border-radius: 20px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 600px) {
    height: 150px;
    width: 50%;
  }
`;
