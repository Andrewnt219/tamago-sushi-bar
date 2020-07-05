import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  primary: '#E23638',
  yellow: '#E3E04D',
  brown: '#961517',
  pink: '#FA2F98',
  darkBlue: '#1D6896',
  lightBlue: '#2099E3',
  h1: '#FA4C2F',
  h2: '#FA4C2F',
  text: '#fff',
  bg1: '#eee',
  bg2: '#ccc',
  black: '#000',
  grey: '#aaa',
  white: '#fff',
  error: '#f44336',
  formTheme: '#FA2F98',
  subtleBackground: '#f7f7f7',
  strongBackground: '#f4f4f4',
  blackBackground: '#1b1f28',

  zIndex: {
    top: 100,
    hg: 80,
    md: 50,
    lw: 1,
  },

  breakpoints: {
    xl: '120em',
    lg: '80em',
    md: '60em',
    sm: '37.5em',
    xs: '30em',
    xxs: '20em',
  },

  shadow: {
    button: '0 2px 4px rgba(0,0,0, .5)',
    paragraph: '0 1.5rem 4rem rgba(0,0,0, .5)',
    section: '0 20px 40px rgba(0,0,0, .5)',
  },

  transitionSpeed: {
    quick: '200ms',
    subtle: '350ms',
    slow: '500ms',
  },
};
