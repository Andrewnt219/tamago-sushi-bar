import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { CartItems } from './components/CartItems';
import { BaseButton } from '../../components/ui/BaseButton';
import { MdLock } from 'react-icons/md';
import { StyledLink } from '../../components/navigation/StyledLink';
import { cartSelector } from '../../features/cartSlice';
import { useSelector } from 'react-redux';
import Spinner from '../../components/ui/LoadingScreen/Spinner/Spinner';

type Props = {};

function Cart(props: Props): ReactElement {
  const cart = useSelector(cartSelector);

  return (
    <Container>
      <Header>Your Tray</Header>
      <Summary>
        <SummaryHeader>Order Summary</SummaryHeader>
        <SubField>
          Subtotal
          {renderValue(cart.subtotal, cart.isLoading)}
        </SubField>

        <SubField>
          Shipping{renderValue(cart.shipping, cart.isLoading)}
        </SubField>

        <SubField>
          Tip
          <InputContainer>
            <TipInput type="number" placeholder="0.00" min="0" />
            <TipMessage>Thank you!</TipMessage>
          </InputContainer>
        </SubField>

        <Field>Total{renderValue(cart.total, cart.isLoading)}</Field>

        <StyledLink to="/checkout">
          <Button disabled={cart.isLoading || cart.subtotal === 0}>
            {cart.subtotal === 0 ? (
              'YOUR CART IS EMPTY'
            ) : (
              <>
                <MdLock />
                PROCEED TO CHECKOUT
              </>
            )}
          </Button>
        </StyledLink>
      </Summary>
      <CartItems cartItems={cart.items} />
    </Container>
  );
}

function renderValue(value: number, isLoading: boolean) {
  return isLoading ? (
    <Spinner size="1.2rem" />
  ) : (
    <Value>${value.toFixed(2)}</Value>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  margin: 2rem;
  display: grid;
  row-gap: 2rem;
  grid-template-areas:
    'header'
    'summary'
    'items';

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    grid-template-areas:
      'header header'
      'items  summary';
    grid-template-columns: 1fr max-content;
    align-items: flex-start;
    column-gap: 3rem;
  }
`;

type HeaderProps = {};
const Header = styled.h2<HeaderProps>`
  grid-area: header;
`;

type SummaryProps = {};
const Summary = styled.div<SummaryProps>`
  grid-area: summary;
  display: grid;
  row-gap: 1rem;
  max-width: 32rem;

  padding: 1rem;
  border-radius: 4px;
  border: 1px solid black;
  text-align: center;
`;

type SummaryHeaderProps = {};
const SummaryHeader = styled.h3<SummaryHeaderProps>`
  /* shifting parent's padding */
  margin-left: -1rem;
  margin-top: -1rem;
  width: calc(100% + 2rem);

  padding: 1rem;
  background: ${(p) => p.theme.primary};
  color: ${(p) => p.theme.white};
`;

type SubFieldProps = {};
const SubField = styled.div<SubFieldProps>`
  display: flex;
  font-weight: 500;
  width: 100%;
  justify-content: space-between;
`;

type FieldProps = {};
const Field = styled.div<FieldProps>`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.3rem;
`;

type ValueProps = {};
const Value = styled.span<ValueProps>``;

type InputContainerProps = {};
const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

type TipInputProps = {};
const TipInput = styled.input<TipInputProps>`
  appearance: textfield;
  text-align: right;
  width: 3rem;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${(p) => p.theme.black};
  outline: none;
  padding-bottom: 0.25rem;

  :hover {
  }

  :placeholder-shown + p {
    visibility: hidden;
    transform: translateY(-2px);
  }
`;

type TipMessageProps = {};
const TipMessage = styled.p<TipMessageProps>`
  font-size: inherit;
  font-weight: normal;
  transition: all 100ms ease-in;
  color: ${(p) => p.theme.primary};
`;

type ButtonProps = {};
const Button = styled(BaseButton).attrs({ contained: true })<ButtonProps>`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  :hover {
    box-shadow: none;
    transform: none;
  }

  :active {
    box-shadow: none;
    transform: translateY(2px);
  }
`;

export default Cart;
