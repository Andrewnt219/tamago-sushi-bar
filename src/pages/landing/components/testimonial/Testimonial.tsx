import React from 'react';
import styled from 'styled-components/macro';
import backgroundImg from '../../../../asset/testimonial.jpg';
import { rgba } from 'polished';
import { TestimonialCard, CustomerDetail } from './TestimonialCard';
import faker from 'faker';
import { LandingSection } from '../LandingSection';

interface TestimonialProps {}
export const Testimonial: React.FC<TestimonialProps> = () => {
  return (
    <LandingSection sectionName="words from our customers">
      <Container>
        <TestimonialCard
          customer={CUSTOMER_1}
          heading="I had the best birthday ever with my family"
        >
          The sushi rolls that they serve here are just amazing and taste just
          like the ones served at the best Japanese restaurants in Tokyo!
          Believe me, I’ve lived there for more than 30 years!
        </TestimonialCard>

        <TestimonialCard customer={CUSTOMER_2} heading="I love tofu">
          Their tofu is just outstanding! I’ve been to many Japanese places in
          my life, but this one is the ultimate best! Also, the very range of
          their traditional dishes is wider than at other US restaurants!
        </TestimonialCard>

        <TestimonialCard customer={CUSTOMER_3} heading="A taste of hometown">
          When I moved from Kyoto to this city, parting ways with my favorite
          family restaurant venue was hard… Luckily here I’ve found an even
          better quality both for the menu and everything else
        </TestimonialCard>
      </Container>
    </LandingSection>
  );
};

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(
      ${(p) => rgba(p.theme.white, 0.5)},
      ${(p) => rgba(p.theme.white, 0.5)}
    ),
    url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  padding: 10%;

  & > *:not(:last-child) {
    margin-bottom: 5rem;
  }
`;

const CustomerFactory = (): CustomerDetail => ({
  name: faker.name.firstName(),
  avatar: faker.image.avatar(),
});

const CUSTOMER_1 = CustomerFactory();
const CUSTOMER_2 = CustomerFactory();
const CUSTOMER_3 = CustomerFactory();
