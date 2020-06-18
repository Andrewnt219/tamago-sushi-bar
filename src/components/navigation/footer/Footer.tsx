import React from 'react';
import styled from 'styled-components/macro';
import { SocialMediaIcons } from './SocialMediaIcons';
import { LogoIcon } from '../../ui/BaseLogo';

interface FooterProps {}
export const Footer: React.FC<FooterProps> = () => {
  return (
    <Container>
      <Logo />

      <SocialMediaIcons />

      <Text>
        © 2020 All Rights Reserved.
        <br />
        Developed by Tuan Phong (Andrew) Nguyen
      </Text>
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.footer<ContainerProps>`
  background: ${(p) => p.theme.blackBackground};
  margin-top: 10vh;
  padding: 10vh 5vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  justify-items: flex-start;
  gap: 3vh;
`;

const Text = styled.p`
  font-size: 1rem;
  color: white;
  display: flex;
  align-items: center;
`;

const Logo = styled(LogoIcon)`
  transform: none;
  grid-row: 1/3;

  width: 20vw;
  max-width: 20rem;
  height: auto;

  justify-self: center;
  align-self: center;
`;
