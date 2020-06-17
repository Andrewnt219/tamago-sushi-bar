import React from 'react';
import styled from 'styled-components/macro';
import { FeatureCard } from './FeatureCard';
import freshIcon from '../../../../asset/fresh.svg';
import betterIcon from '../../../../asset/better.svg';
import familyIcon from '../../../../asset/family.svg';
import { LandingSection } from '../LandingSection';

interface FeaturesProps {}
export const Features: React.FC<FeaturesProps> = () => {
  return (
    <LandingSection backgroundIsStrong sectionName="Why Tamago?">
      <Container>
        <FeatureCard
          cardThemeColor="#ff4500"
          cardContent={CARD_CONTENT_1}
          cardIcon={freshIcon}
        >
          Freshly caught and traditionally steammed. A place where everything is
          freshly made.
        </FeatureCard>

        <FeatureCard
          cardThemeColor="#f94144"
          cardContent={CARD_CONTENT_2}
          cardIcon={familyIcon}
        >
          Something for everybody. A place every of your loved one can enjoy
          nice food for themselve.
        </FeatureCard>

        <FeatureCard
          cardThemeColor="#fdbf00"
          cardContent={CARD_CONTENT_3}
          cardIcon={betterIcon}
        >
          Surprise yourself with chef's weekly special, upload fancy dishes for
          your Instagram&reg;, and give your tummy delicious food.
        </FeatureCard>
      </Container>
    </LandingSection>
  );
};

interface ContainerProps {}
const Container = styled.article<ContainerProps>`
  padding: 0 10%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 35rem));
  gap: 5rem;
  justify-content: center;
`;

const CARD_CONTENT_1 = {
  subHeading: 'always',
  heading: 'fresh',
  footer: 'freshly made sashimi',
};
const CARD_CONTENT_2 = {
  subHeading: "everyone's",
  heading: 'happy',
  footer: 'over 30 unique dishes',
};
const CARD_CONTENT_3 = {
  subHeading: 'keep getting',
  heading: 'better',
  footer: 'innovative menu',
};
