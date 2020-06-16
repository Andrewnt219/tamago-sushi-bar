import styled, { useTheme } from 'styled-components/macro';
import React from 'react';
import { StyledNavLink } from '../StyledNavLink';
import { NavLinkProps as RRNavLinkProps } from 'react-router-dom';
import { IconType } from 'react-icons';

export interface NavigationItemProps extends RRNavLinkProps {
  Icon: IconType;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  Icon,
  children,
  ...props
}) => {
  const theme = useTheme();
  return (
    <StyledLi>
      <Icon fill={theme.primary} size="3rem" />
      <StyledNavLink {...props}>{children}</StyledNavLink>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  display: block;
`;
