import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { lighten } from '@material-ui/core';

type Props = {};

function UserProfile({}: Props): ReactElement {
  return (
    <Container>
      <PrimaryInfo>
        <Avatar />
        <Heading>FirstName LastName</Heading>
        <SubHeading>firstName.lastName@gmail.ca</SubHeading>
      </PrimaryInfo>

      <SubInfo>
        <Info>
          <Value>03</Value>
          <Field>Orders</Field>
        </Info>

        <Info>
          <Value>
            22.15 <ValueUnit>CAD</ValueUnit>
          </Value>
          <Field>Tipping</Field>
        </Info>

        <Info>
          <Value>
            05 <ValueUnit>years</ValueUnit>
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
  align-content: flex-start;
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
  width: 15%;
  padding-top: 15%;
  background: white;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    width: 10rem;
    padding-top: 10rem;
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