import React from 'react';
import styled from 'styled-components/macro';
import { lighten } from 'polished';

interface BackProps {
  onClick: () => void;
  footer: string;
}
export const Back: React.FC<BackProps> = ({ onClick, children, footer }) => {
  return (
    <Container onClick={onClick}>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.div<ContainerProps>`
  color: ${(p) => p.theme.primary};
  background: ${(p) => p.theme.subtleBackground};

  height: 100%;
  padding: 0 2rem 2rem 2rem;
  border: 5px solid;
  border-image: linear-gradient(
      ${(p) => lighten(0.2, p.theme.primary)},
      ${(p) => p.theme.primary}
    )
    1;

  transform: rotateY(180deg);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const Content = styled.p`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  font-family: 'Baloo 2', cursive;
  text-transform: uppercase;
  font-size: 1.6rem;
  letter-spacing: 1px;
  word-spacing: 2px;
`;
