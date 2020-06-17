import React from 'react';
import styled from 'styled-components/macro';
import { Logo } from '../../ui/Logo';
import { DesktopNavigationItems } from './DesktopNavigationItems';

interface AppBarProps {
  height?: string;
}

interface FixedBarProps {
  height?: string;
}

export const AppBar: React.FC<AppBarProps> = ({ height }) => {
  return (
    <FixedBar height={height} id="AppBar">
      <Logo />
      <DesktopNavigationItems />
    </FixedBar>
  );
};

const FixedBar = styled.nav<FixedBarProps>`
  display: none;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 10vw;
    z-index: ${(p) => p.theme.zIndex.top};

    width: 100vw;
    height: ${(p) => p.height};

    font-size: calc(${(p) => p.height} / 8);

    display: flex;
  }
`;
