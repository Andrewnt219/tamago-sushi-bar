import React from 'react';
import styled from 'styled-components/macro';

interface LandingSectionProps {
  sectionName?: string;
  className?: string;
}
export const LandingSection: React.FC<LandingSectionProps & ContainerProps> = ({
  sectionName,
  children,
  backgroundIsStrong,
  className,
}) => {
  return (
    <Container backgroundIsStrong={backgroundIsStrong} className={className}>
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
  font-size: 3.2rem;
  text-align: center;
  text-transform: uppercase;

  padding: 5rem 0 4rem 0;
  margin: 0 auto;

  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 10rem;
    background-color: ${(p) => p.theme.primary};
    margin: 1rem auto 0 auto;
  }
`;
