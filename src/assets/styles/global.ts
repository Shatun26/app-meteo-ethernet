import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle<{ theme: any }>`
  html {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
  }

  /* #__next {
    height: 100vh;
    display: flex;
    flex-direction: column;
  } */

  a {
    text-decoration: none;
  }

  button{
    border: none;
    outline: none;
    background: transparent;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;