import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  
*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
  height: 100%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body{
    font-family: 'Be Vietnam Pro', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    background: white;
    color: #333;
  height: 100%;

}
`;

export default GlobalStyles;
