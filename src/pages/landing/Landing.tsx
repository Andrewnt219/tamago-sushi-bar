import React from 'react';
import { HeroImage, Features, LandingMenu, Testimonial } from './components';

interface LandingProps {}

interface SectionLandingProps {}

/**
 * @description renders a Landing Page for the app
 */
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
