import React from 'react';
import styled from 'styled-components/macro';
import { MobileNavigationItems } from './MobileNavigationItems';

interface PopupMenuProps {}
export const PopupMenu: React.FC<PopupMenuProps> = () => {
  return (
    <Container>
      <MobileNavigationItems />
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.nav<ContainerProps>`
  position: absolute;
  bottom: 8rem;
  right: 0;
  display: block;

  background-color: #fff;
`;
