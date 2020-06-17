import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components/macro';

interface FlippingCardProps {
  isFlipped: boolean;
  children: [ReactElement | Element, ReactElement | Element];
}

/**
 * @param children a toggle for isFlipped somewhere inside each face
 */
export const FlippingCard: React.FC<FlippingCardProps> = ({
  isFlipped,
  children,
}) => {
  return <Container isFlipped={isFlipped}>{children}</Container>;
};

interface ContainerProps {
  isFlipped: boolean;
}
const Container = styled.div<ContainerProps>`
  width: 100%;
  padding-top: 178%;

  position: relative;
  perspective: 100rem;

  & > * {
    border-radius: 7px;
    overflow: hidden;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: all ${(p) => p.theme.transitionSpeed.slow} ease;
    box-shadow: ${(p) => p.theme.shadow.button};
  }

  & > *:last-child {
    transform: rotateY(180deg);
  }

  ${(p) =>
    p.isFlipped &&
    css`
      & > *:first-child {
        transform: rotateY(-180deg);
      }

      & > *:last-child {
        transform: rotateY(0);
      }
    `}
`;
