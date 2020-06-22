import React from 'react';
import styled, { css } from 'styled-components/macro';
import { DesktopNavigationItems } from './DesktopNavigationItems';
import { useInView } from 'react-intersection-observer';
import { useRouteMatch } from 'react-router-dom';
import { BaseLogo } from '../../ui/BaseLogo';

interface AppBarProps {
  height?: string;
}

export const AppBar: React.FC<AppBarProps> = ({ height }) => {
  const [ref, isInView] = useInView();
  let matchLandingPage = useRouteMatch({
    path: '/',
    exact: true,
  });

  return (
    <>
      <StaticAppBar
        height={height}
        id="AppBar"
        ref={ref}
        isOnLandingPage={Boolean(matchLandingPage)}
      >
        <BaseLogo />
        <DesktopNavigationItems />
      </StaticAppBar>

      {!isInView && (
        <FixedAppBar>
          <DesktopNavigationItems />
        </FixedAppBar>
      )}
    </>
  );
};
interface StaticAppBarProps {
  height?: string;
  isOnLandingPage?: boolean;
}

const StaticAppBar = styled.nav<StaticAppBarProps>`
  display: none;

  /* Intentionally move these outside of media for style inheritance */
  padding: 1rem 10vw;

  max-width: 100vw;
  
  height: ${(p) => p.height};

  color: ${(p) => p.theme.black};

  ${(p) =>
    p.isOnLandingPage &&
    css`
      color: ${p.theme.white};

      position: absolute;
      top: 0;
      left: 0;
    `}

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    display: flex;
  }
`;

const FixedAppBar = styled(StaticAppBar)`
  position: fixed;
  top: 0;
  left: 0;
  background: ${(p) => p.theme.subtleBackground};
  box-shadow: ${(p) => p.theme.shadow.button};
  z-index: ${(p) => p.theme.zIndex.top};

  width: 100vw;
  color: ${(p) => p.theme.black};
  height: 5rem;
`;
