import React, { useState } from 'react';
import { HeroImage, Features, LandingMenu, Testimonial } from './components';
import { LoadingScreen } from '../../components/ui/LoadingScreen/LoadingScreen';

interface LandingProps {}

interface SectionLandingProps {}

/**
 * @description renders a Landing Page for the app
 */
export const Landing: React.FC<LandingProps> = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <HeroImage onLoad={() => setIsLoading(false)} />
      <Features />
      <Testimonial />
      <LandingMenu />
    </>
  );
};
