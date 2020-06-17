import React from 'react';
import styled, { useTheme } from 'styled-components/macro';
import { BaseButton } from '../../../../components/ui/BaseButton';
import { lighten, linearGradient } from 'polished';

interface FrontCardContent {
  heading: string;
  subHeading: string;
}
interface FrontProps {
  onClick: () => void;
  iconSrc: string;
  cardContent: FrontCardContent;
}
export const Front: React.FC<FrontProps> = ({
  onClick,
  iconSrc,
  cardContent,
}) => {
  const theme = useTheme();

  return (
    <Container>
      <ImageContainer>
        <CircularImg imgSrc={iconSrc}></CircularImg>
      </ImageContainer>

      <Content>
        <SubHeading>{cardContent.subHeading}</SubHeading>
        <Heading>{cardContent.heading}</Heading>
      </Content>

      <Button onClick={onClick} text color={theme.primary}>
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
    ${(p) => lighten(0.1, p.theme.primary)},
    ${(p) => p.theme.primary}
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircularImg {
  imgSrc: string;
}
const CircularImg = styled.div<CircularImg>`
  border-radius: 50%;

  width: 40%;
  padding-top: 40%;

  background-image: url(${(p) => p.imgSrc});
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;
  background-color: #fff;
`;

const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  word-wrap: break-word;

  /* gradient-text */
  background-image: ${(p) =>
    linearGradient({
      toDirection: 'to right bottom',
      colorStops: [`${lighten(0.1, p.theme.primary)}`, `${p.theme.primary}`],
    })};
  background-clip: text;
  color: transparent;
`;

const Heading = styled.h2`
  font-size: 5rem;
  font-weight: 500;
  text-transform: uppercase;
  max-width: 100%;
`;

const SubHeading = styled.h3`
  font-size: 3rem;
  font-weight: 300;
  text-transform: lowercase;
`;

const Button = styled(BaseButton)`
  align-self: center;
`;
