import React from 'react';
import styled from 'styled-components/macro';
import { BaseButton } from '../../../components/ui/BaseButton';

export interface MenuItemProps {
  name: string;
  price: number;
  description?: string;
  imgSrc?: string;
}
export const MenuItem: React.FC<MenuItemProps> = ({
  name,
  price,
  description,
  imgSrc = '../../../asset/404.png',
}) => {
  return (
    <Container>
      <ItemName>{name}</ItemName>
      <ItemPrice>{price}</ItemPrice>
      <ItemDescription>{description}</ItemDescription>
      <ItemImg src={imgSrc} />
      <Button>Add</Button>
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.li<ContainerProps>`
  display: block;
`;
const ItemName = styled.h3`
  text-transform: uppercase;
  font-weight: 500;
`;
const ItemPrice = styled.p`
  ::before {
    content: '$';
  }
`;
const ItemDescription = styled.p``;
const ItemImg = styled.img`
  width: 5rem;
  height: 5rem;
`;
const Button = styled(BaseButton)``;
