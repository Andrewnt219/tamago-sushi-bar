import React from 'react';
import styled from 'styled-components/macro';
import LogoImg from '../../asset/logo.png';

interface LogoStyledProps {}

interface LogoProps {}

/**
 * @return a LogoIcon with brand name - Tamago
 */
export const Logo: React.FC<LogoProps> = () => {
  return (
    <Container>
      <LogoIcon />
      <BrandName>Tamago</BrandName>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: min-content;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

const LogoIcon = styled.img.attrs({ src: LogoImg })<LogoStyledProps>`
  height: 100%;
`;

const BrandName = styled.p`
  transform: translateX(-20%);

  font-weight: 700;
  text-align: center;
  color: ${(p) => p.theme.primary};
`;
