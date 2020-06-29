import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { BaseButton } from '../../../components/ui/BaseButton';
import ImageSrc from '../../../asset/menus/Agedashi Tofu.jpg';
import { MdRemove, MdAdd } from 'react-icons/md';

type Props = {};

function CartItem({}: Props): ReactElement {
  return (
    <Container>
      <Image src={ImageSrc} />

      <SubContainer>
        <PrimaryText>Some Item Name</PrimaryText>
        <QuantityContainer>
          <Button>
            <MdRemove />
          </Button>
          <Quantity>1</Quantity>
          <Button isLeftButton>
            <MdAdd />
          </Button>
        </QuantityContainer>
      </SubContainer>

      <ProductPrice>
        <PrimaryText>$99.00</PrimaryText>
        <Price>$9.00 each</Price>
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
