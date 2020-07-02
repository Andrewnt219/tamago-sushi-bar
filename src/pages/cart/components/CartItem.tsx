import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { BaseButton } from '../../../components/ui/BaseButton';
import { MdRemove, MdAdd } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseItemQuantity,
  itemIsLoadingSelector,
  removeItemFromCart,
} from '../../../features/cartSlice';
import Spinner from '../../../components/ui/LoadingScreen/Spinner/Spinner';
import { CartItem as CartItemProps } from '../../../features/sliceTypes';

type Props = CartItemProps & {};

function CartItem({ id, name, price, quantity, imgSrc }: Props): ReactElement {
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

  const onRemoveButtonClicked = () => {
    dispatch(removeItemFromCart(id));
  };

  useEffect(() => {
    let timerId: number;
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      timerId = setTimeout(() => {
        if (currentQuantity <= 0) {
          dispatch(removeItemFromCart(id));
        } else {
          dispatch(
            increaseItemQuantity({
              itemId: id,
              amount: currentQuantity,
              isIncrementAmount: false,
            })
          );
        }
      }, 300);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [currentQuantity, id, dispatch]);

  return (
    <Container>
      <Image src={imgSrc} />

      <SubContainer>
        <PrimaryText>{name}</PrimaryText>
        <QuantityContainer>
          <QuantityButton
            disabled={currentQuantity === 0}
            onClick={onMinusButtonClicked}
          >
            <MdRemove />
          </QuantityButton>
          <Quantity>{currentQuantity}</Quantity>
          <QuantityButton isLeftButton onClick={onAddButtonClicked}>
            <MdAdd />
          </QuantityButton>
          {isLoading && (
            <SpinnerWrapper>
              <Spinner size="1rem" />
            </SpinnerWrapper>
          )}
        </QuantityContainer>
        <RemoveButton onClick={onRemoveButtonClicked}>
          Remove item from cart
        </RemoveButton>
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
  row-gap: 0.8rem;
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

type QuantityButtonProps = {
  isLeftButton?: boolean;
};
const QuantityButton = styled(BaseButton).attrs({ outlined: true })<
  QuantityButtonProps
>`
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

const SpinnerWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

type RemoveButtonProps = {};
const RemoveButton = styled.button<RemoveButtonProps>`
  padding: 0;
  padding-bottom: 0.2rem;
  justify-self: flex-start;
  font-size: inherit;
  background: transparent;
  border: none;
  border-bottom: 1px solid currentColor;
  cursor: pointer;

  color: ${(p) => p.theme.black};

  transition: all 200ms ease;
  :hover {
    color: ${(p) => p.theme.primary};
    border-bottom-color: ${(p) => p.theme.primary};
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
