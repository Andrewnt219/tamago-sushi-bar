import React from 'react';
import styled, { useTheme, ThemeProvider } from 'styled-components/macro';
import { useToggle } from '../../../../hook';
import { FlippingCard } from '../../../../components/ui/FlippingCard';
import { Front } from './Front';
import { Back } from './Back';

interface FeatureCardProps {
  frontColor: string;
  backColor: string;
}
export const FeatureCard: React.FC<FeatureCardProps> = () => {
  const [isFlipped, setIsFlipped] = useToggle();
  const defaultTheme = useTheme();

  return (
    <ThemeProvider theme={{ ...defaultTheme, primary: '#ff4500' }}>
      <FlippingCard isFlipped={isFlipped}>
        <Front onClick={setIsFlipped} />

        <Back onClick={setIsFlipped} />
      </FlippingCard>
    </ThemeProvider>
  );
};
