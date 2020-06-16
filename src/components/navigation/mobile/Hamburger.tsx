import React from 'react';
import styled, { css } from 'styled-components/macro';
import { PopupMenu } from './PopupMenu';
import { rgba } from 'polished';
import { useOpen } from '../../../hook/useOpen';

interface HamburgerProps {}
export const Hamburger: React.FC<HamburgerProps> = () => {
  const [menuIsOpen, toggleMenu] = useOpen();

  return (
    <Container onClick={toggleMenu}>
      {menuIsOpen && <PopupMenu />}
      <Line active={menuIsOpen} />
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.button<ContainerProps>`
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  z-index: ${(p) => p.theme.zIndex.hg};
  transition: background 300ms ease;

  background-color: ${(p) => p.theme.primary};
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  box-shadow: 0 2px 5px #000;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LineProps {
  active: boolean;
}
const Line = styled.div<LineProps>`
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

  ::before {
    position: absolute;
    top: -0.8rem;
  }

  ::after {
    position: absolute;
    top: 0.8rem;
  }

  ${(p) =>
    p.active &&
    css`
      /* increase specitivity */
      & {
        background-color: transparent;
      }

      ::before {
        top: 0;
        transform: scale(0.9) rotate(135deg);
      }

      ::after {
        top: 0;
        transform: scale(0.9) rotate(-135deg);
      }
    `}
`;
