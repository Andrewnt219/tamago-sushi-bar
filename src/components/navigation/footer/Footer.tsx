import React from 'react';
import styled from 'styled-components/macro';
import { SocialMediaIcons } from './SocialMediaIcons';
import { BaseLogo } from '../../ui/BaseLogo';

interface FooterProps {}
export const Footer: React.FC<FooterProps & ContainerProps> = ({ height }) => {
  return (
    <Container height={height}>
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

interface ContainerProps {
  height: string;
}
const Container = styled.footer<ContainerProps>`
  position: absolute;
  bottom: 0;
  left: 0;

  height: ${(p) => p.height};
  width: 100%;
  background: ${(p) => p.theme.blackBackground};

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

const Logo = styled(BaseLogo)`
  transform: none;
  grid-row: 1/3;

  width: 20vw;
  max-width: 20rem;
  height: auto;

  justify-self: center;
  align-self: center;
`;
