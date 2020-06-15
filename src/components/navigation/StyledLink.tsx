import React, { forwardRef } from 'react';
import styled from 'styled-components/macro';
import { Link as RRLink } from 'react-router-dom';

interface LinkProps {
  to: string;
}

type LinkRef = HTMLAnchorElement;

const Link = forwardRef<LinkRef, LinkProps>(({ children, ...props }, ref) => {
  return (
    <RRLink ref={ref} {...props}>
      {children}
    </RRLink>
  );
});

/**
 * @param children the text of NavLink
 * @param props props of NavLink from React Router
 * @param ref HTMLAnchorElement
 */
export const StyledLink = styled(Link)`
  &:link,
  &:visited {
    color: ${(p) => p.theme.white};
  }
`;
