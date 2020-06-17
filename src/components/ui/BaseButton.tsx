import styled, { css } from 'styled-components/macro';

interface BaseButtonProps {
  contained?: boolean;
  outlined?: boolean;
  text?: boolean;
  color?: string;
  fontSize?: string;
}
export const BaseButton = styled.button<BaseButtonProps>`
  font-size: ${(p) => p.fontSize ?? '1.6rem'};
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  border-radius: 10rem;
  cursor: pointer;
  box-shadow: ${(p) => p.theme.shadow.button};
  transition: all ${(p) => p.theme.transitionSpeed.quick} ease-in;

  :active,
  :hover {
    filter: brightness(0.9);
  }

  :hover, :focus {
    transform: translateY(-2px);
  }

  :active {
    transform: translateY(0);
  }

  ${(p) =>
    p.contained &&
    css`
      background-color: ${p.color ?? p.theme.primary};
      color: ${p.theme.text};
    `}

  ${(p) =>
    p.outlined &&
    css`
      border-color: ${p.color ?? p.theme.primary};
      color: ${p.color ?? p.theme.primary};
    `}

    ${(p) =>
      p.text &&
      css`
        border-bottom: 1px solid ${p.color ?? p.theme.primary};
        border-radius: 0;
        box-shadow: none;
        background: transparent;
        padding: 0.25rem 0.5rem;
        color: ${p.color ?? p.theme.primary};

        :hover,
        :focus {
          filter: none;
          background: ${p.color ?? p.theme.primary};
          color: ${p.theme.text};
          box-shadow: ${p.theme.shadow.button};
        }
      `}
`;
