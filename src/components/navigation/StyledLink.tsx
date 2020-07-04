import React, { forwardRef } from 'react';
import styled from 'styled-components/macro';
import { Link as RRLink, LinkProps } from 'react-router-dom';

// type LinkRef = HTMLAnchorElement;

// type Props = LinkProps & {
//   className: string;
// };

// const Link = forwardRef<LinkRef, Props>(
//   ({ className, children, ...props }, ref) => {
//     return (
//       <RRLink ref={ref} {...props} className={className}>
//         {children}
//       </RRLink>
//     );
//   }
// );

// export const StyledLink = styled(RRLink)`
//   &:link,
//   &:visited {
//     color: currentColor;
//   }
// `;

export { RRLink as StyledLink };
