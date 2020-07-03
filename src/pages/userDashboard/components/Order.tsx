import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { BaseLogo } from '../../../components/ui/BaseLogo';
import {
  MdStoreMallDirectory,
  MdPhoneForwarded,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import { StyledLink } from '../../../components/navigation/StyledLink';
import { rgba } from 'polished';
import { format } from 'date-fns';
import { Order as OrderObject } from '../../../features/sliceTypes';

type Props = {
  type: 'online' | 'inStore';
  order: OrderObject;
};

function Order({ type, order }: Props): ReactElement {
  const { id, createdDate, total } = order;

  return (
    <Container to={{ pathname: `/orders/${id}` }}>
      <Logo>
        <LogoWrapper>
          <BaseLogo withText />
        </LogoWrapper>
      </Logo>

      <Details>
        <DateText>{format(new Date(createdDate), 'MMMM do, yyyy')}</DateText>

        <Price>
          <PriceText>${total.toFixed(2)}</PriceText>
          <MdKeyboardArrowRight />
        </Price>

        <PurchaseType>
          {type === 'inStore' ? (
            <>
              <MdStoreMallDirectory />
              <PurchaseTypeText>IN-STORE PURCHASE</PurchaseTypeText>
            </>
          ) : (
            <>
              <MdPhoneForwarded />
              <PurchaseTypeText>ONLINE PURCHASE</PurchaseTypeText>
            </>
          )}
        </PurchaseType>
      </Details>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled(StyledLink)<ContainerProps>`
  display: flex;
  padding: 1rem 0.5rem;

  :hover {
    background: ${(p) => rgba(p.theme.grey, 0.1)};
  }
`;

type LogoProps = {};
const Logo = styled.div<LogoProps>`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  margin-right: 1rem;
  border-right: 2px dashed #ccc;
`;

type LogoWrapperProps = {};
const LogoWrapper = styled.span<LogoWrapperProps>`
  height: 2rem;
`;

type DetailsProps = {};
const Details = styled.div<DetailsProps>`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr min-content;
  row-gap: 0.5rem;
`;

type DateTextProps = {};
const DateText = styled.h3<DateTextProps>`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
`;

type PurchaseTypeProps = {};
const PurchaseType = styled.span<PurchaseTypeProps>`
  display: flex;
  align-items: center;
  font-size: 0.9rem;

  color: ${(p) => p.theme.grey};
`;

type PurchaseTypeTextProps = {};
const PurchaseTypeText = styled.span<PurchaseTypeTextProps>`
  display: inline-block;
  margin-left: 0.5rem;
`;

type PriceProps = {};
const Price = styled.span<PriceProps>`
  display: flex;
  align-items: center;
  grid-column: 2 / -1;
  grid-row: 1/3;

  font-size: 1.2rem;
`;

type PriceTextProps = {};
const PriceText = styled.span<PriceTextProps>`
  display: inline-block;
  margin-right: 0.4rem;
  width: max-content;
`;

export default Order;
