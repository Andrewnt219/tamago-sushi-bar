// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    yellow: string;
    brown: string;
    pink: string;
    darkBlue: string;
    lightBlue: string;
    grey: string;
    h1: string;
    h2: string;
    text: string;
    bg1: string;
    bg2: string;
    black: string;
    white: string;
    error: string;
    subtleBackground: string;
    strongBackground: string;
    blackBackground: string;

    zIndex: {
      top: number;
      hg: number;
      md: number;
      lw: number;
    };

    /**
     * @param xl 1920px
     * @param lg 1280px
     * @param md 960px
     * @param sm 600px
     * @param xs 480px
     * @param xss 300px
     */
    breakpoints: {
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
      xxs: string;
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
