import React from 'react';
import styled from 'styled-components/macro';

interface HamburgerProps {}
export const Hamburger: React.FC<HamburgerProps> = () => {
  return (
    <Container>
      <HiddenInput id="hamburger" />
      <Toggler htmlFor="hamburger">
        <Line></Line>
      </Toggler>
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.div<ContainerProps>`
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  z-index: ${(p) => p.theme.zIndex.hg};

  background-color: ${(p) => p.theme.primary};
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  box-shadow: 0 2px 5px #000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  &:checked + label {
    div {
      background-color: transparent;

      ::before {
        top: 0;
        transform: scale(0.9) rotate(135deg);
      }

      ::after {
        top: 0;
        transform: scale(0.9) rotate(-135deg);
      }
    }
  }
`;

const Toggler = styled.label`
  height: 80%;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

const Line = styled.div`
  position: relative;

  &,
  &::before,
  &::after {
    content: '';
    display: block;
    background-color: #fff;
    width: 4rem;
    height: 0.3rem;
    border-radius: 100px;

    transition: all 300ms ease;
  }

  &::before {
    position: absolute;
    top: -0.8rem;
  }

  &::after {
    position: absolute;
    top: 0.8rem;
  }
`;
