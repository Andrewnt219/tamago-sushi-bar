import React from 'react';
import { useTheme, ThemeProvider } from 'styled-components/macro';
import { useToggle } from '../../../../hook';
import { FlippingCard } from '../../../../components/ui/FlippingCard';
import { Front } from './Front';
import { Back } from './Back';

interface FeatureCardProps {
  cardIcon: string;
  cardThemeColor: string;
  cardContent: {
    heading: string;
    subHeading: string;
    footer: string;
  };
}
export const FeatureCard: React.FC<FeatureCardProps> = ({
  cardThemeColor,
  cardContent,
  cardIcon,
  children,
}) => {
  const [isFlipped, setIsFlipped] = useToggle();
  const defaultTheme = useTheme();

  return (
    <ThemeProvider theme={{ ...defaultTheme, primary: cardThemeColor }}>
      <FlippingCard isFlipped={isFlipped}>
        <Front
          cardContent={cardContent}
          iconSrc={cardIcon}
          onClick={setIsFlipped}
        />

        <Back footer={cardContent.footer} onClick={setIsFlipped}>
          {children}
        </Back>
      </FlippingCard>
    </ThemeProvider>
  );
};
