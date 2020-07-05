import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import faker from 'faker';

type Props = {
  totalOrders: number;
  fullName: string;
  email: string | null;
  totalTip: number;
  loyaltyYear: number;
};

function UserProfile({
  totalOrders,
  totalTip,
  fullName,
  email,
  loyaltyYear,
}: Props): ReactElement {
  return (
    <Container>
      <PrimaryInfo>
        <Avatar src={faker.image.avatar()} />
        <Heading>{fullName}</Heading>
        <SubHeading>{email ? email : ''}</SubHeading>
      </PrimaryInfo>

      <SubInfo>
        <Info>
          <Value>{totalOrders < 10 ? '0' + totalOrders : totalOrders}</Value>
          <Field>Orders</Field>
        </Info>

        <Info>
          <Value>
            {totalTip} <ValueUnit>CAD</ValueUnit>
          </Value>
          <Field>Tipping</Field>
        </Info>

        <Info>
          <Value>
            {loyaltyYear} <ValueUnit>years</ValueUnit>
          </Value>
          <Field>Loyalty</Field>
        </Info>
      </SubInfo>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 50vw;
  clip-path: ellipse(100vw 50vw at 50% 0);
  background: ${(p) => p.theme.primary};
  padding: 2vw 0 5vw 0;

  display: grid;
  align-content: space-around;
  row-gap: 2rem;

  font-size: 1.2rem;
  color: ${(p) => p.theme.subtleBackground};

  @media screen and (min-width: ${(p) => p.theme.breakpoints.xxs}) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.xs}) {
    font-size: 2rem;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    height: 65vmin;
    clip-path: ellipse(100vw 65vmin at 50% 0);
  }
`;

type PrimaryInfoProps = {};
const PrimaryInfo = styled.div<PrimaryInfoProps>`
  display: grid;
  row-gap: 0.25rem;
  justify-items: center;
  align-items: center;
`;

type AvatarProps = {};
const Avatar = styled.img<AvatarProps>`
  width: 3.5em;
  height: 3.5em;
  background: white;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    width: 4em;
    height: 4em;
  }
`;

type HeadingProps = {};
const Heading = styled.h3<HeadingProps>`
  font-size: inherit;
`;

type SubHeadingProps = {};
const SubHeading = styled.h4<SubHeadingProps>`
  font-weight: 300;
  font-size: smaller;
`;

type InfoContainerProps = {};
const SubInfo = styled.div<InfoContainerProps>`
  display: flex;
  justify-content: space-around;
  font-size: smaller;
`;

type InfoProps = {};
const Info = styled.div<InfoProps>`
  display: grid;
  row-gap: 0.5rem;
  justify-items: center;
`;

type ValueProps = {};
const Value = styled.span<ValueProps>`
  font-weight: 600;
  font-size: inherit;
`;

type ValueUnitProps = {};
const ValueUnit = styled.span<ValueUnitProps>`
  font-size: smaller;
  font-weight: normal;
`;

type FieldProps = {};
const Field = styled.span<FieldProps>``;

export { UserProfile };
