import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';

type Props = {};

function ItemDetailsFooter(props: Props): ReactElement {
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
        <Sub>$99.00</Sub>
        <Sub>$9.99</Sub>
        <Sub>$0.00</Sub>

        <Primary>$100.00</Primary>
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
