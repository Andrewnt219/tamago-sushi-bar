import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { BaseButton } from '../../../components/ui/BaseButton';
import { MdRemove, MdAdd } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  CartItem as CartItemProps,
  updateCartItem,
  itemIsLoadingSelector,
} from '../../../features/cartSlice';
import Spinner from '../../../components/ui/LoadingScreen/Spinner/Spinner';

type Props = CartItemProps & {};

function CartItem({ id, name, price, quantity }: Props): ReactElement {
  const firstRender = React.useRef(true);
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const dispatch = useDispatch();
  const isLoading = useSelector(itemIsLoadingSelector(id));

  const onMinusButtonClicked = () => {
    setCurrentQuantity((prev) => prev - 1);
  };

  const onAddButtonClicked = () => {
    setCurrentQuantity((prev) => prev + 1);
  };

  useEffect(() => {
    let timerId: number;
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      timerId = setTimeout(() => {
        dispatch(updateCartItem({ itemId: id, amount: currentQuantity }));
      }, 300);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [currentQuantity, id, dispatch]);

  return (
    <Container>
      <Image src="https://i.imgur.com/lDhoiJR.jpg" />

      <SubContainer>
        <PrimaryText>{name}</PrimaryText>
        <QuantityContainer>
          <Button onClick={onMinusButtonClicked}>
            <MdRemove />
          </Button>
          <Quantity>{currentQuantity}</Quantity>
          <Button isLeftButton onClick={onAddButtonClicked}>
            <MdAdd />
          </Button>
          {isLoading && <Spinner size="1rem" />}
        </QuantityContainer>
      </SubContainer>

      <ProductPrice>
        <PrimaryText>${(currentQuantity * price).toFixed(2)}</PrimaryText>
        <Price>${price.toFixed(2)} each</Price>
      </ProductPrice>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.li<ContainerProps>`
  display: grid;
  grid-template-columns: 20% auto max-content;
  column-gap: 1.5rem;
  align-items: flex-start;
  padding: 1rem 1rem;
  background: ${(p) => p.theme.white};
  box-shadow: ${(p) => p.theme.shadow.button};
  border-radius: 4px;
`;

type ImageProps = {};
const Image = styled.img<ImageProps>`
  width: 100%;
  height: 8rem;
  border-radius: 4px;
  object-fit: cover;
  object-position: center;
`;

type SubContainerProps = {};
const SubContainer = styled.div<SubContainerProps>`
  display: grid;
  row-gap: 0.5rem;
`;

type NameProps = {};
const PrimaryText = styled.h4<NameProps>`
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`;

type QuantityContainerProps = {};
const QuantityContainer = styled.div<QuantityContainerProps>`
  display: flex;

  height: 2rem;
  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

type QuantityProps = {};
const Quantity = styled.span<QuantityProps>`
  display: inline-block;
  background: transparent;
  padding: 0.25rem 0.5rem;
  border: 1px solid #ccc;
  width: 4rem;
  text-align: center;
  /* same as button */
  height: 100%;
  border-radius: 4px;
`;

type ButtonProps = {
  isLeftButton?: boolean;
};
const Button = styled(BaseButton).attrs({ outlined: true })<ButtonProps>`
  width: 2rem;
  height: 100%;
  padding: 0;
  border-radius: 4px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  transition: all 150ms ease-out;

  &:hover {
    transform: none;
    box-shadow: none;
  }

  &:active {
    transform: translate(${(p) => (p.isLeftButton ? '1px' : '-1px')}, 2px);
    box-shadow: none;
  }
`;

type PriceProps = {};
const Price = styled.span<PriceProps>`
  display: flex;
  flex-direction: column;
`;

type ProductPriceProps = {};
const ProductPrice = styled.div<ProductPriceProps>``;

export { CartItem };
