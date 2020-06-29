import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';

type Props = {};

function ItemDetailsHeader(props: Props): ReactElement {
  return (
    <>
      <Header>Item</Header>
      <Header>Quantity</Header>
      <Header>Price</Header>
    </>
  );
}

type HeaderProps = {};
const Header = styled.h3<HeaderProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export { ItemDetailsHeader };
