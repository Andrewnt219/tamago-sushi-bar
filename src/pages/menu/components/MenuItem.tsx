import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { BaseButton } from '../../../components/ui/BaseButton';
import { Loading } from '../../../hoc/Loading';
import Spinner from '../../../components/ui/LoadingScreen/Spinner/Spinner';

export interface MenuItemProps {
  name: string;
  price: number;
  description?: string;
  imgSrc?: string;
}
export const MenuItem: React.FC<MenuItemProps> = ({
  name,
  price,
  description = 'No description',
  imgSrc = '../../../asset/404.png',
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container>
      <ImgContainer>
        {isLoading && (
          <SpinnerContainer>
            <ImgSpinner />
          </SpinnerContainer>
        )}
        <ItemImg src={imgSrc} onLoad={() => setIsLoading(false)} />
      </ImgContainer>
      <ItemName>{name}</ItemName>
      <ItemPrice>{price.toFixed(2)}</ItemPrice>
      <ItemDescription>{description}</ItemDescription>
      <Button outlined>+</Button>
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.li<ContainerProps>`
  display: grid;
  grid-template-columns: 70% 30%;
  align-items: center;
`;
const ItemName = styled.h3`
  text-transform: uppercase;
  font-weight: 500;
`;
const ItemPrice = styled.h3`
  font-weight: normal;

  justify-self: flex-end;

  ::before {
    content: '$';
  }
`;

const ItemDescription = styled.p`
  grid-column: 1/-1;

  font-style: italic;
  font-size: 1.5rem;
`;
const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;

  grid-column: 1/-1;

  margin-bottom: 1.5rem;
`;
const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ImgSpinner = styled(Spinner).attrs((p) => ({ color: p.theme.primary }))``;

const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  border-radius: 4px;
`;

const Button = styled(BaseButton)`
  grid-column: 1/-1;
  justify-self: flex-end;

  height: 3rem;
  width: 3rem;
  padding: unset;
  border-radius: 50%;

  font-size: 2rem;
`;
