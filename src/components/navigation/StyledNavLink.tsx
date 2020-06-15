import React from 'react';
import styled from 'styled-components/macro';
import { NavLink as RRNavLink, NavLinkProps } from 'react-router-dom';

const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => {
  return (
    <StyledLi>
      <RRNavLink activeClassName="active" {...props}>
        {children}
      </RRNavLink>
    </StyledLi>
  );
};

const StyledLi = styled.li``;

/**
 * @param children the text of NavLink
 * @param props props of NavLink from React Router
 */
export const StyledNavLink = styled(NavLink)`
  &.active {
    font-weight: bolder;
  }

  &:visited,
  &:link {
    color: ${(p) => p.theme.primary};
  }
`;
