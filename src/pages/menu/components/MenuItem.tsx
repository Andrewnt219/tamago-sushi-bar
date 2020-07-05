import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components/macro';
import { BaseButton } from '../../../components/ui/BaseButton';
import Spinner from '../../../components/ui/LoadingScreen/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  cartSelector,
  increaseItemQuantity,
  cartItemSelector,
} from '../../../features/cartSlice';
import { getCartItemIdByKey } from '../../../helpers';
import tamagoSVG from '../../../asset/tamago.svg';
import { MdAddShoppingCart } from 'react-icons/md';
export interface MenuItemProps {
  name: string;
  price: number;
  description?: string;
  imgSrc?: string;
  sku: string;
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
  sku,
  description = 'No description',
  /* default is 404 img */
  imgSrc = 'https://i.imgur.com/tjk7okS.png',
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const itemInCart = useSelector(cartItemSelector(name));
  const theme = useTheme();

  const onAddItem = () => {
    const itemId = getCartItemIdByKey(cart, 'name', name);

    if (itemId) {
      dispatch(
        increaseItemQuantity({ itemId, amount: 1, isIncrementAmount: true })
      );
    } else {
      dispatch(
        addItemToCart({
          name,
          price,
          sku,
          quantity: 1,
          imgSrc,
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
      <InCartQuantity>
        <TamagoSVG src={tamagoSVG} />x{itemInCart ? itemInCart.quantity : 0}
      </InCartQuantity>

      {cart.isLoading ? (
        <AddSpinnerWrapper>
          <Spinner color={theme.primary} size="1rem" />
        </AddSpinnerWrapper>
      ) : (
        <Button outlined onClick={onAddItem}>
          {itemInCart ? '+' : <MdAddShoppingCart />}
        </Button>
      )}
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

const InCartQuantity = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
`;
const TamagoSVG = styled.img`
  height: 2em;
`;

const AddSpinnerWrapper = styled.span`
  justify-self: flex-end;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 3rem;
`;

const Button = styled(BaseButton)`
  justify-self: flex-end;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 3rem;
  width: 3rem;
  padding: unset;
  border-radius: 50%;

  font-size: 2rem;
`;
