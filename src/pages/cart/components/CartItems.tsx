import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { CartItem } from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { cartItemsSelector, initCart } from '../../../features/cartSlice';

type Props = {};

function CartItems({}: Props): ReactElement {
  const cartItems = useSelector(cartItemsSelector);
  const dispatch = useDispatch();
  return (
    <Container>
      <button onClick={() => dispatch(initCart())}>CREATE CART</button>
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
