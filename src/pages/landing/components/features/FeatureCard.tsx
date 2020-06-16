import React from 'react';
import styled from 'styled-components/macro';
import { useToggle } from '../../../../hook';
import { FlippingCard } from '../../../../components/ui/FlippingCard';

interface FeatureCardProps {}
export const FeatureCard: React.FC<FeatureCardProps> = () => {
  const [isFlipped, setIsFlipped] = useToggle();

  return (
    <FlippingCard isFlipped={isFlipped}>
      <Front onClick={setIsFlipped} />
      <Back onClick={setIsFlipped} />
    </FlippingCard>
  );
};

interface FrontProps {}
const Front = styled.div<FrontProps>`
  background: blue;
`;

interface BackProps {}
const Back = styled.div<BackProps>`
  background: red;
  transform: rotateY(180deg);
`;
