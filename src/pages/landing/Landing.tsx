import React from 'react';
import styled from 'styled-components/macro';
import {
  HeroImage,
  Features,
  LandingMenu,
  LandingAbout,
  Testimonial,
} from './components';

interface LandingProps {}

interface SectionLandingProps {}

const SectionLanding = styled.section<SectionLandingProps>`
  overflow-y: auto;
  height: 100vh;
  scroll-snap-type: y proximity;

  & > * {
    height: 100vh;
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
