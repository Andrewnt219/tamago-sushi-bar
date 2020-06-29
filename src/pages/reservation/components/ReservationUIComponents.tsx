import styled from 'styled-components/macro';
import { BaseForm } from '../../../components/ui/form/BaseForm';
import { BaseButton } from '../../../components/ui/BaseButton';

export const BaseReservationForm = styled(BaseForm)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  font-size: 1.2rem;
`;

export const SubmitButton = styled(BaseButton)`
  margin-top: 2rem;
`;
