import React from 'react';
import styled from 'styled-components/macro';

interface FeaturesProps {}
export const Features: React.FC<FeaturesProps> = () => {
  return <Container>Features</Container>;
};

interface ContainerProps {}
const Container = styled.article<ContainerProps>``;
