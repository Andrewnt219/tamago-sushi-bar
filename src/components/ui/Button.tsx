import styled, { css } from 'styled-components/macro';

interface ButtonStyledProps {
  primary?: boolean;
  outlined?: boolean;
}
export const Button = styled.button<ButtonStyledProps>`
  font-size: 1.6rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  border-radius: 10rem;
  cursor: pointer;
  box-shadow: ${(p) => p.theme.shadow.button};
  transition: all ${(p) => p.theme.transitionSpeed.quick} ease;

  :active,
  :hover {
    filter: brightness(0.9);
  }

  :hover {
    transform: translateY(-2px);
  }

  :active {
    transform: translateY(0);
  }

  ${(p) =>
    p.primary &&
    css`
      background-color: ${p.theme.primary};
      color: ${p.theme.text};
    `}

  ${(p) =>
    p.outlined &&
    css`
      border-color: ${(p) => p.theme.primary};
      color: ${p.theme.primary};
    `}
`;
