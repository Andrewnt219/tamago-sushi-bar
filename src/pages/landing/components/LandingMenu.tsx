import React from 'react';
import styled from 'styled-components/macro';

interface LandingMenuProps {}
export const LandingMenu: React.FC<LandingMenuProps> = () => {
  return <Container>Landing Menu</Container>;
};

interface ContainerProps {}
const Container = styled.article<ContainerProps>`
  height: 100vh;
`;