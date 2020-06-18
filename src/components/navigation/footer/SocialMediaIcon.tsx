import React from 'react';
import styled, { useTheme, ThemeProvider } from 'styled-components/macro';

interface SocialMediaProps {
  fillColor?: string;
}
export const SocialMedia: React.FC<
  SocialMediaProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, fillColor = '#000', href }) => {
  const defaultTheme = useTheme();

  return (
    <ThemeProvider theme={{ ...defaultTheme, primary: fillColor }}>
      <Container href={href}>
        {children}
        <Filter />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.a`
  background-color: ${(p) => p.theme.subtleBackground};
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 4px;

  display: block;
  position: relative;
  overflow: hidden;

  svg {
    fill: ${(p) => p.theme.primary};
    width: 100%;
    height: 100%;

    position: relative;
    transition: all ${(p) => p.theme.transitionSpeed.subtle} ease;
    z-index: ${(p) => p.theme.zIndex.lw};
  }

  &:hover,
  &:active {
    div {
      opacity: 1;
      clip-path: circle(150% at 0% 0%);
    }

    svg {
      fill: ${(p) => p.theme.subtleBackground};
    }
  }
`;

interface FilterProps {}
const Filter = styled.div<FilterProps>`
  background: ${(p) => p.theme.primary};

  width: 100%;
  height: 100%;
  opacity: 0;

  clip-path: circle(0% at 0% 0%);

  position: absolute;
  top: 0;
  left: 0;
  transition: all ${(p) => p.theme.transitionSpeed.subtle} ease;
`;
