import styled, { useTheme } from 'styled-components/macro';
import React from 'react';

import { NavLinkProps as RRNavLinkProps } from 'react-router-dom';
import { IconType } from 'react-icons';
import { StyledNavLink } from '../StyledNavLink';

export interface MobileNavigationItemProps extends RRNavLinkProps {
  Icon: IconType;
}

export const MobileNavigationItem: React.FC<MobileNavigationItemProps> = ({
  Icon,
  children,
  ...props
}) => {
  const theme = useTheme();
  return (
    <Container>
      <IconWrapper>
        <Icon fill={theme.primary} />
      </IconWrapper>
      <StyledNavLink {...props}>{children}</StyledNavLink>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.6rem;
`;

const IconWrapper = styled.span`
  display: flex;
  padding: 0.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #000;

  margin-right: 0.5rem;

  svg {
    background-size: 1.6rem;
  }
`;
