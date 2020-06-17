import React from 'react';
import styled from 'styled-components/macro';
import { FeatureCard } from './FeatureCard';

interface FeaturesProps {}
export const Features: React.FC<FeaturesProps> = () => {
  return (
    <Container>
      <FeatureCard frontColor="#ff4500" backColor="#ff4500" />
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.article<ContainerProps>`
  background-color: ${(p) => p.theme.subtleBackground};
  padding: 20% 10%;
`;
