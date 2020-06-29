import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';

type Props = {
  name: string;
  price: number;
  quantity: number;
};

function ItemDetail({ name, price, quantity }: Props): ReactElement {
  return (
    <>
      <ItemInfo>
        <ItemName>{name}</ItemName>
        <ItemPrice>${price.toFixed(2)} each</ItemPrice>
      </ItemInfo>
      <Quantity>x{quantity}</Quantity>
      <ItemTotalPrice>${(price * quantity).toFixed(2)}</ItemTotalPrice>
    </>
  );
}

type ItemInfoProps = {};
const ItemInfo = styled.div<ItemInfoProps>`
  display: flex;
  flex-direction: column;
`;

type ItemNameProps = {};
const ItemName = styled.h4<ItemNameProps>`
  text-transform: capitalize;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
`;

type ItemSubInfoProps = {};
const ItemPrice = styled.span<ItemSubInfoProps>`
  color: ${(p) => p.theme.grey};
  font-size: 0.9rem;
  font-style: italic;
`;

type QuantityProps = {};
const Quantity = styled.span<QuantityProps>`
  display: flex;
  align-items: center;

  color: ${(p) => p.theme.grey};
`;

type TotalPriceProps = {};
const ItemTotalPrice = styled.span<TotalPriceProps>`
  display: flex;
  align-items: center;

  font-weight: 400;
`;

export { ItemDetail };
