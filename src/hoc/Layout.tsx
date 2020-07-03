import React from 'react';
import { AppBar } from '../components/navigation/desktop/AppBar';
import styled from 'styled-components';
import { CssContext } from '../context/CssContext';
import { Hamburger } from '../components/navigation/mobile/Hamburger';
import { Footer } from '../components/navigation/footer/Footer';

interface LayoutProps {}

interface MainProps {}

const APPBAR_HEIGHT = '8rem';
const FOOTER_HEIGHT = '40vh';
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CssContext.Provider value={{ appbarHeight: APPBAR_HEIGHT }}>
      <AppBar height={APPBAR_HEIGHT} />
      <Hamburger />
      <Main>{children}</Main>
      <Footer height={FOOTER_HEIGHT} />
    </CssContext.Provider>
  );
};

const Main = styled.main<MainProps>`
  max-width: 100vw;

  padding-bottom: calc(${FOOTER_HEIGHT} + 10vh);
`;
