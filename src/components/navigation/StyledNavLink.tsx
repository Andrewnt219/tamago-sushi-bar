import React from 'react';
import styled from 'styled-components/macro';
import { NavLink as RRNavLink, NavLinkProps } from 'react-router-dom';

const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => {
  return (
    <RRNavLink activeClassName="active" {...props}>
      {children}
    </RRNavLink>
  );
};

/**
 * @param children the text of NavLink
 * @param props props of NavLink from React Router
 */
export const StyledNavLink = styled(NavLink)`
  transition: all ${(p) => p.theme.transitionSpeed.quick};

  /* &.active {
  } */

  &:visited,
  &:link {
    color: inherit;
  }
`;
