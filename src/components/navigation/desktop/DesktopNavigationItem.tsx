import styled from 'styled-components/macro';
import React from 'react';
import { StyledNavLink } from '../StyledNavLink';
import { NavLinkProps as RRNavLinkProps } from 'react-router-dom';

export interface DesktopNavigationItemProps extends RRNavLinkProps {}

export const DesktopNavigationItem: React.FC<DesktopNavigationItemProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledLi>
      <StyledNavLink {...props}>{children}</StyledNavLink>
    </StyledLi>
  );
};

interface StyledLiProps {}
const StyledLi = styled.li<StyledLiProps>`
  display: flex;
  align-items: flex-end;

  height: 100%;
  padding: 0 1rem 1rem 1rem;
  color: inherit;
  font-weight: 300;
  border-bottom: 0.1rem solid transparent;

  transition: all ${(p) => p.theme.transitionSpeed.subtle} ease;

  :hover {
    border-bottom: 0.1rem solid ${(p) => p.theme.primary};
  }

  .active {
    color: ${(p) => p.theme.primary};
  }
`;
