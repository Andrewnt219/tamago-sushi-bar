import styled, { useTheme } from 'styled-components/macro';
import React, { useContext } from 'react';

import { NavLinkProps as RRNavLinkProps } from 'react-router-dom';
import { IconType } from 'react-icons';
import { StyledNavLink } from '../StyledNavLink';
import HamburgerContext from '../../../context/HamburgerContext';

export interface MobileNavigationItemProps extends RRNavLinkProps {
  Icon: IconType;
}

export const MobileNavigationItem: React.FC<MobileNavigationItemProps> = ({
  Icon,
  children,
  ...props
}) => {
  const theme = useTheme();
  const { toggleMenu } = useContext(HamburgerContext);

  return (
    <Container onClick={toggleMenu}>
      <StyledNavLink {...props}>{children}</StyledNavLink>
      <IconWrapper>
        <Icon fill={theme.primary} />
      </IconWrapper>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  font-size: 1.6rem;

  a,
  span {
    opacity: 0.5;
  }

  .active,
  .active + span {
    opacity: 1;
  }
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    background-size: 1.6rem;
  }
`;
