import React from 'react';
import styled from 'styled-components/macro';

interface LandingAboutProps {}
export const LandingAbout: React.FC<LandingAboutProps> = () => {
  return <Container>Landing About</Container>;
};

interface ContainerProps {}
const Container = styled.article<ContainerProps>`
  height: 100vh;
`;
