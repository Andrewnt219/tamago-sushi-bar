import React from 'react';
import styled from 'styled-components/macro';
import { BaseButton } from '../../../../components/ui/BaseButton';
import img from '../../../../asset/tradition.svg';
import { lighten, linearGradient } from 'polished';

interface FrontProps {
  onClick: () => void;
}
export const Front: React.FC<FrontProps> = ({ onClick }) => {
  return (
    <Container>
      <ImageContainer>
        <CircularImg></CircularImg>
      </ImageContainer>

      <Content>
        <SubHeading>always</SubHeading>
        <Heading>FRESH</Heading>
      </Content>

      <Button onClick={onClick} text color="orangered">
        Learn more
      </Button>
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  padding-bottom: 2rem;
  color: ${(p) => p.theme.primary};
`;

const ImageContainer = styled.div`
  height: 40%;
  background: radial-gradient(
    ${(p) => lighten(0.2, p.theme.primary)},
    ${(p) => p.theme.primary}
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircularImg = styled.div`
  border-radius: 50%;

  width: 40%;
  padding-top: 40%;

  background-image: url(${img}), linear-gradient(#fff, #fff);
  background-position: center;
  background-size: contain;
`;

const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* gradient-text */
  background-image: ${(p) =>
    linearGradient({
      toDirection: 'to right bottom',
      colorStops: [`${lighten(0.2, p.theme.primary)}`, `${p.theme.primary}`],
    })};
  background-clip: text;
  color: transparent;
`;

const Heading = styled.h2`
  font-size: 8rem;
  font-weight: 500;
`;

const SubHeading = styled.h3`
  font-size: 3rem;
  font-weight: 300;
`;

const Button = styled(BaseButton)`
  align-self: center;
`;
