import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.4rem;
  }
  
  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  h5 {
    font-size: 1.3rem
  }

  h6 {
    font-size: 1.2rem
  }

  /* h1, h2, h3, h4, h5, h6 {
    text-align: center;
    margin: 10px auto;
  } */

`;
export default GlobalStyle;
