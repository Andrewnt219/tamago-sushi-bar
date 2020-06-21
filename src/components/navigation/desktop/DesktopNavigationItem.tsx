import styled, { css } from 'styled-components/macro';
import React from 'react';
import { StyledNavLink } from '../StyledNavLink';
import { NavLinkProps as RRNavLinkProps } from 'react-router-dom';
import { appBarIsFixedSelector } from '../../../features/uiSlice';
import { useSelector } from 'react-redux';

export interface DesktopNavigationItemProps extends RRNavLinkProps {}

export const DesktopNavigationItem: React.FC<DesktopNavigationItemProps> = ({
  children,
  ...props
}) => {
  const appbarIsFixed = useSelector(appBarIsFixedSelector);

  return (
    <StyledLi appbarIsFixed={appbarIsFixed}>
      <StyledNavLink {...props}>{children}</StyledNavLink>
    </StyledLi>
  );
};

interface StyledLiProps {
  appbarIsFixed: boolean;
}
const StyledLi = styled.li<StyledLiProps>`
  display: flex;
  align-items: flex-end;

  height: 100%;
  padding: 0 1rem 1rem 1rem;
  color: inherit;
  font-weight: 300;
  font-size: 2rem;
  border-bottom: 0.1rem solid transparent;

  :hover {
    border-bottom: 0.1rem solid ${(p) => p.theme.primary};
  }

  .active {
    color: ${(p) => p.theme.primary};
  }

  ${(p) =>
    p.appbarIsFixed &&
    css`
      padding: unset;
      border: unset;

      :hover {
        border: unset;
        color: ${(p) => p.theme.primary};
      }
    `}
`;
