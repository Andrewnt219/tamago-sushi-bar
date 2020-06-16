import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  primary: '#E23638',
  yellow: '#E3E04D',
  brown: '#961517',
  h1: '#FA4C2F',
  h2: '#FA4C2F',
  text: '#fff',
  bg1: '#eee',
  bg2: '#ccc',
  black: '#000',
  white: '#fff',

  zIndex: {
    top: 100,
    hg: 80,
    md: 50,
    lw: 1,
  },

  breakpoints: {
    // 120em = 1920px
    xl: '120em',
    // 80em = 1280px
    lg: '80em',
    // 60em = 960px
    md: '60em',
    // 37.5em = 600px
    sm: '37.5em',
    // 0em = 0px
    xs: '0',
  },
};
