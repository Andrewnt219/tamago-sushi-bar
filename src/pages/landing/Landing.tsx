import React from 'react';
import { HeroImage, Features, LandingMenu, Testimonial } from './components';

interface LandingProps {}

interface SectionLandingProps {}

export const Landing: React.FC<LandingProps> = () => {
  return (
    <>
      <HeroImage />
      <Features />
      <Testimonial />
      <LandingMenu />
    </>
  );
};
