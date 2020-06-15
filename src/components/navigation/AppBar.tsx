import React from 'react';
import styled from 'styled-components/macro';
import { Logo } from '../ui/Logo';

interface AppBarProps {
  height: string;
}

interface FixedBarProps {
  height: string;
}

export const AppBar: React.FC<AppBarProps> = ({ height }) => {
  return (
    <FixedBar height={height} id="AppBar">
      <Logo />
    </FixedBar>
  );
};

const FixedBar = styled.nav<FixedBarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${(p) => p.height};

  font-size: calc(${(p) => p.height} / 8);
`;
