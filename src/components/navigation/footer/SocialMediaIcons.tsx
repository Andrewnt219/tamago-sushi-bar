import React from 'react';
import styled from 'styled-components/macro';
import { FaGithubAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { SocialMedia } from './SocialMediaIcon';

interface SocialMediaIconsProps {}
export const SocialMediaIcons: React.FC<SocialMediaIconsProps> = () => {
  return (
    <Container>
      <SocialMedia fillColor="#6e5494" href="https://github.com/Andrewnt219">
        <FaGithubAlt />
      </SocialMedia>

      <SocialMedia
        fillColor="#0e76a8"
        href="https://www.linkedin.com/in/andrewnt219/"
      >
        <FaLinkedinIn />
      </SocialMedia>

      <SocialMedia
        fillColor="#3b5998"
        href="https://www.facebook.com/phong.nguyentuan.1080"
      >
        <FaFacebookF />
      </SocialMedia>
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 20rem;
`;
