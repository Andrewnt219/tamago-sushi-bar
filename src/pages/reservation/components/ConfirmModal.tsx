import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { rgba } from 'polished';
import { ReservationFormValues } from '../Reservation';
import { BaseButton } from '../../../components/ui/BaseButton';
import { format } from 'date-fns';

type Props = {
  data: ReservationFormValues;
  onCancel: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onConfirm: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function ConfirmModal({ data, onCancel, onConfirm }: Props): ReactElement {
  return (
    <Container>
      <Modal>
        <Header>Confirm your reservation</Header>
        <Body>
          <Field>
            <FieldName>Your name </FieldName>
            <FieldValue>
              {(data.prefix !== 'name' ? data.prefix : '') +
                ' ' +
                data.preferredName}
            </FieldValue>
          </Field>
          <Field>
            <FieldName>Your email</FieldName>
            <FieldValue>{data.email}</FieldValue>
          </Field>
          <Field>
            <FieldName>Reservation's date</FieldName>
            <FieldValue>{new Date(data.date).toLocaleDateString()}</FieldValue>
          </Field>
          <Field>
            <FieldName>Reservation's time</FieldName>
            <FieldValue>{format(new Date(data.time), 'HH:mm')}</FieldValue>
          </Field>
          <Field>
            <FieldName>Number of guests</FieldName>
            <FieldValue>{data.guests}</FieldValue>
          </Field>
        </Body>
        <Footer>
          <Button onClick={onCancel} outlined>
            CANCEL
          </Button>
          <Button onClick={onConfirm} outlined>
            CONFIRM
          </Button>
        </Footer>
      </Modal>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background: ${(p) => rgba(p.theme.black, 0.8)};
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(p) => p.theme.zIndex.top};
`;

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(p) => p.theme.white};
  box-shadow: ${(p) => p.theme.shadow.button};
  padding: 2rem;

  display: grid;
  row-gap: 2rem;
`;

const Header = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`;
const Body = styled.div`
  display: grid;
  row-gap: 1rem;
`;
const Field = styled.div`
  display: grid;
  row-gap: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed #ccc;
`;
const FieldName = styled.span``;
const FieldValue = styled.span`
  color: ${(p) => p.theme.primary};
`;
const Footer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  column-gap: 2rem;
`;
const Button = styled(BaseButton)``;

export { ConfirmModal };
