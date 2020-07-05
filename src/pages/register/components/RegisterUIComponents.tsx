import styled from 'styled-components/macro';
import { BaseButton } from '../../../components/ui/BaseButton';

type ControllersProps = {};
export const Controllers = styled.div<ControllersProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
`;

type ButtonProps = {};
export const Button = styled(BaseButton).attrs({ contained: true })<
  ButtonProps
>`
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    box-shadow: none;
    transform: none;
  }

  :active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`;
