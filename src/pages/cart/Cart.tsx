import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { CartItems } from './components/CartItems';

type Props = {};

function Cart({}: Props): ReactElement {
  return (
    <Container>
      <Header>Your Tray</Header>
      <Summary>
        <SummaryHeader>Order Summary</SummaryHeader>
        <SubField>
          Subtotal<Value>$99.00</Value>
        </SubField>

        <SubField>
          Shipping<Value>$0.00</Value>
        </SubField>

        <SubField>
          Tip
          <InputContainer>
            <TipInput type="number" placeholder="0.00" min="0" />
            <TipMessage>Thank you!</TipMessage>
          </InputContainer>
        </SubField>

        <Field>
          Total<Value>$100.00</Value>
        </Field>
      </Summary>
      <CartItems />
    </Container>
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

export default Cart;
