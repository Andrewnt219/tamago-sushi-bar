import React from 'react';
import styled from 'styled-components/macro';

import { HeroImage } from './components/HeroImage';
interface LandingProps {}

interface SectionLandingProps {}

const SectionLanding = styled.section<SectionLandingProps>``;

export const Landing: React.FC<LandingProps> = () => {
  return (
    <SectionLanding>
      <HeroImage>Landing Page</HeroImage>
    </SectionLanding>
  );
};
