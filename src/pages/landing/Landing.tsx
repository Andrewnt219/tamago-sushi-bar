import React from 'react';
import styled from 'styled-components/macro';

import { HeroImage } from './components/HeroImage';
import { Features } from './components/Features';
import { LandingMenu } from './components/LandingMenu';
import { Testimonial } from './components/Testimonial';
import { LandingAbout } from './components/LandingAbout';
interface LandingProps {}

interface SectionLandingProps {}

const SectionLanding = styled.section<SectionLandingProps>`
  overflow-y: auto;
  height: 100vh;
  scroll-snap-type: y proximity;

  & > * {
    scroll-snap-align: center;
  }
`;

export const Landing: React.FC<LandingProps> = () => {
  return (
    <SectionLanding>
      <HeroImage />
      <Features />
      <LandingAbout />
      <Testimonial />
      <LandingMenu />
    </SectionLanding>
  );
};
