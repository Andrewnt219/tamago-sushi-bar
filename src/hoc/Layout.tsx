import React from 'react';
import { AppBar } from '../components/navigation/AppBar';
import styled from 'styled-components';

interface LayoutProps {}

interface MainProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <AppBar height={APPBAR_HEIGHT} />
      </header>
      <Main>{children}</Main>
    </>
  );
};

const APPBAR_HEIGHT = '8rem';

const Main = styled.main<MainProps>`
  margin-top: ${APPBAR_HEIGHT};
`;
