import React from 'react';
import styled from 'styled-components/macro';

import { HeroImage } from './components/HeroImage';
import { Features } from './components/Features';
import { LandingMenu } from './components/LandingMenu';
interface LandingProps {}

interface SectionLandingProps {}

const SectionLanding = styled.section<SectionLandingProps>`
  overflow: auto;
  height: 100vh;
  scroll-snap-type: y mandatory;

  & > * {
    scroll-snap-align: center;
  }
`;

export const Landing: React.FC<LandingProps> = () => {
  return (
    <SectionLanding>
      <HeroImage />
      <Features />
      <LandingMenu />
    </SectionLanding>
  );
};
