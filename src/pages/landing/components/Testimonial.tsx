import React from 'react';
import styled from 'styled-components/macro';

interface TestimonialProps {}
export const Testimonial: React.FC<TestimonialProps> = () => {
  return <Container>Testimonial</Container>;
};

interface ContainerProps {}
const Container = styled.article<ContainerProps>`
  height: 100vh;
`;
