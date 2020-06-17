import React from 'react';
import styled from 'styled-components/macro';
import { linearGradient, lighten } from 'polished';

interface BackProps {
  onClick: () => void;
}
export const Back: React.FC<BackProps> = ({ onClick }) => {
  return <Container onClick={onClick}></Container>;
};

interface ContainerProps {}
const Container = styled.div<ContainerProps>`
  background: ${(p) =>
    linearGradient({
      toDirection: 'to right bottom',
      colorStops: [`${lighten(0.2, p.theme.primary)}`, `${p.theme.primary}`],
    })};
  transform: rotateY(180deg);
`;
