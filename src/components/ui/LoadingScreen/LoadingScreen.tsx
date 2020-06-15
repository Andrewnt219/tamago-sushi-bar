import React from 'react';
import styled, { useTheme } from 'styled-components/macro';
import Spinner from './Spinner/Spinner';

interface LoadingScreenProps {}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(p) => p.theme.black};
  position: relative;
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  const theme = useTheme();

  return (
    <Container>
      <SpinnerContainer>
        <Spinner size="10rem" color={theme.primary} />
      </SpinnerContainer>
    </Container>
  );
};
