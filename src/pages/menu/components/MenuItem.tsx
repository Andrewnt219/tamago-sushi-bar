import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { BaseButton } from '../../../components/ui/BaseButton';
import Spinner from '../../../components/ui/LoadingScreen/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  cartSelector,
  updateCartItem,
} from '../../../features/cartSlice';
import { searchItemInCart } from '../../../helpers';

export interface MenuItemProps {
  name: string;
  price: number;
  description?: string;
  imgSrc?: string;
}

/**
 * @description render a single MenuItem with all the dish's info
 * @param name the name of this dish
 * @param price the price of this dish
 * @param description the description of this dish
 * @param imgSrc the source of this dish's img
 */
export const MenuItem: React.FC<MenuItemProps> = ({
  name,
  price,
  description = 'No description',
  imgSrc = 'https://i.imgur.com/tjk7okS.png',
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);

  const onAddItem = () => {
    const itemId = searchItemInCart(cart, 'name', name);
    debugger;
    if (itemId) {
      dispatch(updateCartItem({ itemId, amount: 1 }));
    } else {
      dispatch(
        addItemToCart({
          name,
          price,
          quantity: 1,
          id: Math.random().toString(),
        })
      );
    }
  };

  return (
    <Container>
      <ImgContainer>
        {isLoading && (
          <SpinnerContainer>
            <ImgSpinner />
          </SpinnerContainer>
        )}
        <ItemImg
          loading="lazy"
          src={imgSrc}
          onLoad={() => setIsLoading(false)}
        />
      </ImgContainer>
      <ItemName>{name}</ItemName>
      <ItemPrice>{price.toFixed(2)}</ItemPrice>
      <ItemDescription>{description}</ItemDescription>
      <Button outlined onClick={onAddItem}>
        +
      </Button>
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.li<ContainerProps>`
  display: grid;
  grid-template-columns: 70% 30%;
  align-items: center;
`;
const ItemName = styled.h3`
  text-transform: uppercase;
  font-weight: 500;
`;
const ItemPrice = styled.h3`
  font-weight: normal;

  justify-self: flex-end;

  ::before {
    content: '$';
  }
`;

const ItemDescription = styled.p`
  grid-column: 1/-1;

  font-style: italic;
  font-size: 1.5rem;
`;
const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;

  grid-column: 1/-1;

  margin-bottom: 1.5rem;
`;
const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ImgSpinner = styled(Spinner).attrs((p) => ({ color: p.theme.primary }))``;

const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  border-radius: 4px;
`;

const Button = styled(BaseButton)`
  grid-column: 1/-1;
  justify-self: flex-end;

  height: 3rem;
  width: 3rem;
  padding: unset;
  border-radius: 50%;

  font-size: 2rem;
`;
