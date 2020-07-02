import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components/macro';

interface SpinnerProps {
  readonly size?: string;
  readonly color?: string;
  readonly className?: string;
}

interface ContainerProps {
  size?: string;
}

interface DotProps {
  color?: string;
}

/**
 * @param size width and height of the spinner
 * @param color the color of the spinner dot
 * @return a Spinner
 */
function Spinner({ size, color, className }: SpinnerProps): ReactElement {
  return (
    <Container className={className} size={size}>
      {createDots(6, color)}
    </Container>
  );
}

/**
 * @param numberOfDots the total number of generated Dots
 * @param color the color of all the Dot
 * @returns an array of Dot
 */
function createDots(numberOfDots: number, color?: string): ReactElement[] {
  let dots: ReactElement[] = [];

  for (let index = 0; index < numberOfDots; index++) {
    dots.push(<Dot key={index} color={color} />);
  }

  return dots;
}

const skChase = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div<ContainerProps>`
  width: ${(p) => p.size ?? '40px'};
  height: ${(p) => p.size ?? '40px'};
  position: relative;
  animation: ${skChase} 2.5s infinite linear both;

  div {
    &:nth-child(1) {
      animation-delay: -1.1s;
    }
    &:nth-child(2) {
      animation-delay: -1s;
    }
    &:nth-child(3) {
      animation-delay: -0.9s;
    }
    &:nth-child(4) {
      animation-delay: -0.8s;
    }
    &:nth-child(5) {
      animation-delay: -0.7s;
    }
    &:nth-child(6) {
      animation-delay: -0.6s;
    }
    &:nth-child(1):before {
      animation-delay: -1.1s;
    }
    &:nth-child(2):before {
      animation-delay: -1s;
    }
    &:nth-child(3):before {
      animation-delay: -0.9s;
    }
    &:nth-child(4):before {
      animation-delay: -0.8s;
    }
    &:nth-child(5):before {
      animation-delay: -0.7s;
    }
    &:nth-child(6):before {
      animation-delay: -0.6s;
    }
  }
`;

const skChaseDot = keyframes`
  80%,
  100% {
    transform: rotate(360deg);
  }
`;

const skyChaseDotBefore = keyframes`
  50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
`;

const Dot = styled.div<DotProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${skChaseDot} 2s infinite ease-in-out both;

  &::before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: ${(p) => p.color ?? p.theme.primary};
    border-radius: 100%;
    animation: ${skyChaseDotBefore} 2s infinite ease-in-out both;
  }
`;

export default Spinner;
