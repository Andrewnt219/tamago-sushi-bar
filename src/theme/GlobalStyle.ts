import { createGlobalStyle } from 'styled-components/macro';
// import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`

  
  :root {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    overflow-x:hidden;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
      font-size: 75%; /* 16px => 12px */
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
      font-size: 81.25%; /* 16px => 13px */
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
      font-size: 87.5%; /* 16px => 14px */
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.xl}) {
      font-size: 93.75%; /* 16px => 15px */
    }


  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Quicksand', sans-serif;
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.6;
  }


  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    text-decoration: none;
    list-style: none;

    font-family: inherit;
  }

  input {
    font-size: inherit;
    font-family: inherit;
  }

  #root {
    min-height: 100vh;
    position: relative;
  }

`;
