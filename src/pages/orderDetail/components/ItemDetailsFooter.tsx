import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';

type Props = {
  subtotal: number;
  tip: number;
  shipping: number;
  total: number;
};

function ItemDetailsFooter({
  subtotal,
  tip,
  shipping,
  total,
}: Props): ReactElement {
  return (
    <React.Fragment>
      <div />
      <Footer>
        <Sub>Subtotal</Sub>
        <Sub>Tip</Sub>
        <Sub>Shipping</Sub>

        <Primary>Total</Primary>
      </Footer>

      <Footer>
        <Sub>${subtotal.toFixed(2)}</Sub>
        <Sub>${tip.toFixed(2)}</Sub>
        <Sub>${shipping.toFixed(2)}</Sub>

        <Primary>${total.toFixed(2)}</Primary>
      </Footer>
    </React.Fragment>
  );
}

type LabelsProps = {};
const Footer = styled.div<LabelsProps>``;

type LabelProps = {};
const Primary = styled.p<LabelProps>`
  font-size: 1.2rem;
`;

type SubProps = {};
const Sub = styled.p<SubProps>`
  font-size: 0.8rem;
  color: ${(p) => p.theme.grey};
`;

export { ItemDetailsFooter };
