import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { ItemDetail } from './components/ItemDetail';
import { ItemDetailsHeader } from './components/ItemDetailsHeader';
import { ItemDetailsFooter } from './components/ItemDetailsFooter';

type Props = {};

function OrderDetail(props: Props): ReactElement {
  return (
    <Container>
      <Header>Order #01</Header>
      <SubHeader>July 2nd, 2020</SubHeader>

      <ItemDetails>
        <ItemDetailsHeader />
        <ItemDetail name="Kinda Long Name" price={2.5} quantity={2} />
        <ItemDetail name="Super duper long name" price={1.25} quantity={5} />
        <ItemDetail name="Shortname" price={3.75} quantity={8} />
        <ItemDetail name="Normal name" price={4.99} quantity={1} />
        <ItemDetail name="Short" price={0} quantity={6} />
        <ItemDetailsFooter />
      </ItemDetails>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  margin: 2rem 5vw;
`;

type HeaderProps = {};
const Header = styled.h2<HeaderProps>`
  font-family: 'Montserrat', sans-serif;
`;

type SubHeaderProps = {};
const SubHeader = styled.h3<SubHeaderProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
`;

type ItemDetailsProps = {};
const ItemDetails = styled.div<ItemDetailsProps>`
  display: grid;
  grid-template-columns: 1fr auto auto;
  row-gap: 1rem;
  column-gap: 2rem;

  margin-top: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px dotted ${(p) => p.theme.black};
`;

export { OrderDetail };
