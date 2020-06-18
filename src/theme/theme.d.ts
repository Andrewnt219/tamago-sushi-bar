// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    yellow: string;
    brown: string;
    h1: string;
    h2: string;
    text: string;
    bg1: string;
    bg2: string;
    black: string;
    white: string;
    subtleBackground: string;
    strongBackground: string;
    blackBackground: string;

    zIndex: {
      top: number;
      hg: number;
      md: number;
      lw: number;
    };

    breakpoints: {
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };

    shadow: {
      button: string;
      section: string;
      paragraph: string;
    };

    transitionSpeed: {
      quick: string;
      subtle: string;
      slow: string;
    };
  }
}
