import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { CartItem } from './CartItem';

type Props = {};

function CartItems({}: Props): ReactElement {
  return (
    <Container>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.ul<ContainerProps>`
  grid-area: items;
  display: grid;
  row-gap: 2rem;
`;

export { CartItems };
