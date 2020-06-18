import React from 'react';
import styled from 'styled-components/macro';
import LogoImg from '../../asset/logo.svg';

interface LogoStyledProps {}

interface LogoProps {
  className?: string;
  showName?: boolean;
}

/**
 * @return a LogoIcon with brand name - Tamago
 */
export const BaseLogo: React.FC<LogoProps> = ({ className, showName }) => {
  return (
    <Container className={className}>
      <LogoIcon />
      {showName && <BrandName>tamago</BrandName>}
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

export const LogoIcon = styled.img.attrs({ src: LogoImg })<LogoStyledProps>`
  transform: translateX(10%);
`;

const BrandName = styled.p`
  font-weight: 500;
  text-align: center;
  color: ${(p) => p.theme.primary};
`;
