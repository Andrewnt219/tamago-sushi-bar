import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { CartItem } from './CartItem';
import { CartItemsState } from '../../../features/cartSliceType';

type Props = {
  cartItems: CartItemsState;
};

function CartItems({ cartItems }: Props): ReactElement {
  return (
    <Container>
      {Object.values(cartItems).map((cartItem) => (
        <CartItem key={cartItem.id} {...cartItem} />
      ))}
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
