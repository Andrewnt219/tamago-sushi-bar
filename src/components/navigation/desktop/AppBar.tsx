import React from 'react';
import styled, { css } from 'styled-components/macro';
import { DesktopNavigationItems } from './DesktopNavigationItems';
import { useSelector } from 'react-redux';
import { appBarIsFixedSelector } from '../../../features/uiSlice';

interface AppBarProps {
  height?: string;
}

export const AppBar: React.FC<AppBarProps> = ({ height }) => {
  const appbarIsFixed = useSelector(appBarIsFixedSelector);

  return (
    <FixedBar height={height} id="AppBar" appbarIsFixed={appbarIsFixed}>
      <DesktopNavigationItems />
    </FixedBar>
  );
};
interface FixedBarProps {
  height?: string;
  appbarIsFixed: boolean;
}

const FixedBar = styled.nav<FixedBarProps>`
  display: none;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem 10vw;
    z-index: ${(p) => p.theme.zIndex.top};

    width: 100vw;
    height: ${(p) => p.height};

    display: flex;

    color: ${(p) => p.theme.white};

    ${(p) =>
      p.appbarIsFixed &&
      css`
        position: fixed;
        background: ${(p) => p.theme.subtleBackground};
        box-shadow: ${(p) => p.theme.shadow.button};

        color: ${(p) => p.theme.black};
        height: 5rem;
      `}
  }
`;
