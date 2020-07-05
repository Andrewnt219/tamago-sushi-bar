import React from 'react';
import styled, { css } from 'styled-components/macro';
import { PopupMenu } from './PopupMenu';
import { useToggle } from '../../../hook';
import { BaseButton } from '../../ui/BaseButton';
import HamburgerContext from '../../../context/HamburgerContext';

interface HamburgerProps {}
export const Hamburger: React.FC<HamburgerProps> = () => {
  const [menuIsOpen, toggleMenu] = useToggle();

  return (
    <Container>
      <HamburgerContext.Provider value={{ toggleMenu }}>
        {menuIsOpen && <PopupMenu />}
        <HamburgerIcon contained onClick={toggleMenu}>
          <Line active={menuIsOpen} />
        </HamburgerIcon>
      </HamburgerContext.Provider>
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.div<ContainerProps>`
  position: fixed;
  bottom: 1rem;
  right: 1.5rem;
  z-index: ${(p) => p.theme.zIndex.hg};

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    display: none;
  }
`;

interface HamburgerIconProps {}
const HamburgerIcon = styled(BaseButton)<HamburgerIconProps>`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  padding: 0;
  box-shadow: ${(p) => p.theme.shadow.button};
  /* border: 0; */

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

    transition: all 200ms ease;
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
