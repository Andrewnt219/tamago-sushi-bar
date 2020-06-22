import styled, { css } from 'styled-components/macro';

interface BaseButtonProps {
  contained?: boolean;
  outlined?: boolean;
  text?: boolean;
  color?: string;
  fontSize?: string;
  shadowed?: boolean;
}
export const BaseButton = styled.button<BaseButtonProps>`
  font-size: ${(p) => p.fontSize ?? 'inherit'};
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  border-radius: 10rem;
  cursor: pointer;
  box-shadow: ${(p) => p.shadowed && p.theme.shadow.button};
  transition: all ${(p) => p.theme.transitionSpeed.quick} ease-in;

  /* :active,
  :hover {
    filter: brightness(0.9);
  } */

  :hover {
    transform: translateY(-.2rem);
    box-shadow: 0 1rem 2rem rgba(0,0,0, .15);
  }

  :active {
    transform: translateY(0);
    box-shadow: 0 .5rem 1rem rgba(0,0,0, .15);
  }

  ${(p) =>
    p.contained &&
    css`
      background-color: ${p.color ?? p.theme.primary};
      color: ${p.theme.text};

      :hover,
      :active {
        filter: brightness(0.9);
      }
    `}

  ${(p) =>
    p.outlined &&
    css`
      background: transparent;
      border-color: ${p.color ?? p.theme.primary};
      color: ${p.color ?? p.theme.primary};

      :hover,
      :active {
        background-color: ${p.color ?? p.theme.primary};
        color: ${p.theme.text};
      }
    `}

    ${(p) =>
      p.text &&
      css`
        border-bottom: 1px solid ${p.color ?? p.theme.primary};
        border-radius: 0;
        background: transparent;
        padding: 0.25rem 0.5rem;
        color: ${p.color ?? p.theme.primary};

        :hover,
        :active {
          filter: none;
          background: ${p.color ?? p.theme.primary};
          color: ${p.theme.text};
        }
      `}
`;
