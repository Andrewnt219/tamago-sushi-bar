import React from 'react';
import styled from 'styled-components/macro';

interface LandingSectionProps {
  sectionName: string;
}
export const LandingSection: React.FC<LandingSectionProps & ContainerProps> = ({
  sectionName,
  children,
  backgroundIsStrong,
}) => {
  return (
    <Container backgroundIsStrong={backgroundIsStrong}>
      <SectionHeader>{sectionName}</SectionHeader>
      {children}
    </Container>
  );
};

interface ContainerProps {
  backgroundIsStrong?: boolean;
}
const Container = styled.div<ContainerProps>`
  min-height: 100vh;
  background-color: ${(p) =>
    p.backgroundIsStrong ? p.theme.strongBackground : p.theme.subtleBackground};
`;

interface SectionHeaderProps {}
const SectionHeader = styled.h2<SectionHeaderProps>`
  font-weight: 400;
  font-size: xx-large;
  text-align: center;
  text-transform: uppercase;

  padding: 4rem 0;
  margin: 0 auto;

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 10rem;
    background-color: ${(p) => p.theme.primary};
    margin: 1rem auto 0 auto;
  }
`;
