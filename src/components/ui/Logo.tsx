import React from 'react';
import styled from 'styled-components/macro';
import LogoImg from '../../asset/logo.png';

interface LogoStyledProps {}

interface LogoProps {
  className?: string;
}

/**
 * @return a LogoIcon with brand name - Tamago
 */
export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Container className={className}>
      <LogoIcon />
      <BrandName>tamago</BrandName>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;

  display: inline-block;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoIcon = styled.img.attrs({ src: LogoImg })<LogoStyledProps>`
  height: 100%;
`;

const BrandName = styled.p`
  font-weight: 500;
  text-align: center;
  color: ${(p) => p.theme.primary};
`;
