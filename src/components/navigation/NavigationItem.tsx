import styled from 'styled-components/macro';
import React from 'react';
import { StyledNavLink } from './StyledNavLink';
import { NavLinkProps } from 'react-router-dom';

export const NavigationItem: React.FC<NavLinkProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledLi>
      <StyledNavLink {...props}>{children}</StyledNavLink>
    </StyledLi>
  );
};

const StyledLi = styled.li``;
