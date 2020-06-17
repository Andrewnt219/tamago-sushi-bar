import React from 'react';
import styled from 'styled-components/macro';
import { LandingSection } from './LandingSection';

interface LandingAboutProps {}
export const LandingAbout: React.FC<LandingAboutProps> = () => {
  return (
    <LandingSection
      backgroundIsStrong
      sectionName="Landing About"
    ></LandingSection>
  );
};
