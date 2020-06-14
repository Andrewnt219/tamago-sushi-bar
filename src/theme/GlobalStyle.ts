import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  :root {
    font-size: 62.5%;
    font-family: 'Quicksand', sans-serif;
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html, body {
    min-height: 100vh;
  }

`;
