import React from 'react';
import { AppBar } from '../components/navigation/desktop/AppBar';
import styled from 'styled-components';
import { CssContext } from '../context/CssContext';
import { Hamburger } from '../components/navigation/mobile/Hamburger';
import { Footer } from '../components/navigation/footer/Footer';

interface LayoutProps {}

interface MainProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const APPBAR_HEIGHT = '8rem';

  return (
    <CssContext.Provider value={{ appbarHeight: APPBAR_HEIGHT }}>
      <AppBar height={APPBAR_HEIGHT} />
      <Hamburger />
      <Main>{children}</Main>
      <Footer />
    </CssContext.Provider>
  );
};

const Main = styled.main<MainProps>`
  /* Compatible with Footer height */
  min-height: 60vh;
  max-width: 100vw;
`;
