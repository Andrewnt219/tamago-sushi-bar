import React from 'react';
import styled from 'styled-components/macro';
import { HeroImage, Features, LandingMenu, Testimonial } from './components';

interface LandingProps {}

interface SectionLandingProps {}

const SectionLanding = styled.section<SectionLandingProps>``;

export const Landing: React.FC<LandingProps> = () => {
  return (
    <SectionLanding>
      <HeroImage />
      <Features />
      <Testimonial />
      <LandingMenu />
    </SectionLanding>
  );
};
