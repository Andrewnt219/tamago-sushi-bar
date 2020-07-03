import React, { useEffect } from 'react';
import styled, { useTheme } from 'styled-components/macro';
import Spinner from './Spinner/Spinner';

interface LoadingScreenProps {}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(p) => p.theme.subtleBackground};
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(p) => p.theme.zIndex.top};
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :not(:first-child) {
    margin-top: 10vh;
  }
`;

const Text = styled.h2`
  font-weight: 500;
`;

export const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  const theme = useTheme();

  useEffect(() => {
    const html = document.querySelector('html')!;
    html.style.overflow = 'hidden';

    return () => {
      html.style.overflow = 'auto';
    };
  }, []);

  return (
    <Container>
      <SpinnerContainer>
        <Spinner size="10rem" color={theme.primary} />
        <Text>Catching fish</Text>
      </SpinnerContainer>
    </Container>
  );
};
