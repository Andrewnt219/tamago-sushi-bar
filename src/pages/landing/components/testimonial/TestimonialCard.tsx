import React from 'react';
import styled from 'styled-components/macro';
import { rgba } from 'polished';

export interface CustomerDetail {
  name: string;
  avatar: string;
}

interface TestimonialCardProps {
  customer: CustomerDetail;
  heading: string;
}
export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  customer,
  heading,
  children,
}) => {
  return (
    <Container>
      <Avatar>
        <Picture src={customer.avatar} />
        <CustomerName>{customer.name}</CustomerName>
      </Avatar>

      <Content>
        <Heading>{heading}</Heading>
        <Review>{children}</Review>
      </Content>
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.div<ContainerProps>`
  background-color: ${(p) => rgba(p.theme.white, 0.8)};
  padding: 10%;
  border-radius: 4px;
`;

interface ContentProps {}
const Content = styled.div<ContentProps>``;

const Heading = styled.h3`
  font-weight: bolder;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const Review = styled.p``;

interface AvatarProps {}
const Avatar = styled.figure<AvatarProps>`
  width: 10rem;
  height: 10rem;
  margin-right: 2rem;

  clip-path: circle(50% at 50% 50%);
  shape-outside: circle(50% at 50% 50%);
  float: left;

  position: relative;
  overflow: hidden;

  &:hover {
    img {
      filter: blur(4px) brightness(60%);
      transform: scale(1);
    }

    figcaption {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

interface CustomerNameProps {}
const CustomerName = styled.figcaption<CustomerNameProps>`
  position: absolute;
  top: 50%;
  left: 50%;

  text-align: center;
  color: ${(p) => p.theme.white};
  text-transform: uppercase;

  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  word-wrap: break-word;

  opacity: 0;
  transform: translate(-50%, -20%);
  transition: all ${(p) => p.theme.transitionSpeed.quick} ease;
`;

interface PictureProps {}
const Picture = styled.img<PictureProps>`
  max-width: 100%;
  max-height: 100%;

  transform: scale(1.1);
  transition: all ${(p) => p.theme.transitionSpeed.quick} ease;
`;
