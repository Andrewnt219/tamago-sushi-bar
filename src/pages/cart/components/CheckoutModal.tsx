import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import tickSVG from '../../../asset/tick.svg';

type Props = {
  onClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
};

function CheckoutModal({ onClick }: Props): ReactElement {
  return (
    <Container onClick={onClick}>
      <Icon src={tickSVG} />
      <Text>Your order is on its way</Text>
      <SubText>(Click to dismiss)</SubText>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${(p) => p.theme.zIndex.hg};

  background: ${(p) => p.theme.white};
  box-shadow: ${(p) => p.theme.shadow.button};
  padding: 2rem 4rem;

  display: grid;
  justify-items: center;
  row-gap: 1rem;
  width: max-content;

  cursor: pointer;
`;

const Icon = styled.img`
  height: 4rem;
`;

const Text = styled.span`
  font-size: 2rem;
`;

const SubText = styled.span`
  font-style: italic;
`;

export { CheckoutModal };
