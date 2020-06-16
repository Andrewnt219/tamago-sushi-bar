import React from 'react';
import { AppBar } from '../components/navigation/AppBar';
import styled from 'styled-components';
import { CssContext } from '../context/CssContext';

interface LayoutProps {}

interface MainProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const APPBAR_HEIGHT = '8rem';

  return (
    <CssContext.Provider value={{ appbarHeight: APPBAR_HEIGHT }}>
      <AppBar height={APPBAR_HEIGHT} />

      <Main>{children}</Main>
    </CssContext.Provider>
  );
};

const Main = styled.main<MainProps>``;
