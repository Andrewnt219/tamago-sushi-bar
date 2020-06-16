import { createGlobalStyle } from 'styled-components/macro';
// import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`

  
  :root {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Quicksand', sans-serif;
  }


  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    text-decoration: none;
    list-style: none;
  }

  #root {
    min-height: 100vh;
    position: relative;
  }

`;
