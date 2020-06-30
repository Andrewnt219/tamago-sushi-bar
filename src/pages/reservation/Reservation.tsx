import React, { useState } from 'react';
import styled, {
  ThemeProvider,
  DefaultTheme,
  css,
} from 'styled-components/macro';
import { ReservationForm1 } from './components/ReservationForm1';
import { useFormStep } from '../../hook';

import ReservationForm2 from './components/ReservationForm2';
import background from '../../asset/background/reservation.jpg';
import { rgba } from 'polished';
import { useForm } from 'react-hook-form';
import { useFormState } from '../../hook/useFormState';
import { roundToNearestMinutes } from 'date-fns/esm';
import { add } from 'date-fns';

interface ReservationProps {}
interface FormValues {
  preferredName: string;
  prefix: 'mr' | 'mrs' | 'ms' | 'name';
  email: string;
  date: string;
  time: string;
  guests: '1' | '2-4' | '4-8';
  createAccount: 'yes' | 'no';
}

const NUMBER_OF_STEP = 2;
const Reservation: React.FC<ReservationProps> = () => {
  const [currentStep, nextStep, , jumpToStep] = useFormStep(NUMBER_OF_STEP);
  const [completedStep, setCompletedStep] = useState(-1);

  const {
    handleSubmit,
    errors,
    register,
    formState,
    triggerValidation,
  } = useForm<FormValues>({
    mode: 'onChange',
    validateCriteriaMode: 'all',
  });

  const [formValues, handleChange] = useFormState<FormValues>({
    preferredName: '',
    prefix: 'name',

    email: '',
    date: add(new Date(), { days: 1 }).toDateString(),
    time: roundToNearestMinutes(new Date(), { nearestTo: 15 }).toString(),
    guests: '1',
    createAccount: 'no',
  });

  const onSubmitStep1 = handleSubmit((_, __) => {
    nextStep();
    setCompletedStep(1);
  });
  const onSubmitStep2 = handleSubmit((_, __) => {
    console.log(formValues);
    setCompletedStep(2);
  });

  let form;
  switch (currentStep) {
    case 1:
      form = (
        <ReservationForm1
          isSubmittable={formState.isValid}
          formValues={formValues}
          register={register}
          errors={errors}
          handleChange={handleChange}
          onSubmit={onSubmitStep1}
        />
      );
      break;
    case 2:
      form = (
        <ReservationForm2
          isSubmittable={formState.isValid}
          formValues={formValues}
          register={register}
          errors={errors}
          handleChange={handleChange}
          onSubmit={onSubmitStep2}
          triggerValidation={triggerValidation}
        />
      );
      break;

    default:
      break;
  }

  return (
    <ThemeProvider
      theme={(defaultTheme: DefaultTheme) => ({
        ...defaultTheme,
        primary: defaultTheme.lightBlue,
      })}
    >
      <Container>
        <FormContainer>
          <FormHeader>
            <Header>Reservation</Header>
            <FormSelectButtons>
              <FormSelectButton
                active={currentStep === 1}
                onClick={() => jumpToStep(1)}
              >
                INFO
              </FormSelectButton>

              <FormSelectButton
                disabled={completedStep < 1}
                active={currentStep === 2}
                onClick={() => jumpToStep(2)}
              >
                BOOKING
              </FormSelectButton>
            </FormSelectButtons>
          </FormHeader>

          <FormBody>{form}</FormBody>
        </FormContainer>
        <Image />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.section`
  max-width: 100vw;
  margin: 2rem;
  position: relative;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    min-height: 100vh;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    min-height: 100vh;
  }
`;

interface FormContainerProps {}
const FormContainer = styled.div<FormContainerProps>`
  width: 100%;
  shape-margin: 2rem;
  background: ${(p) => p.theme.white};
  z-index: ${(p) => p.theme.zIndex.lw};
  margin: auto 0;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    position: absolute;
    top: 0;
    left: 0;
    align-items: flex-start;

    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
    width: 50%;
    height: 100%;
  }
`;
const FormHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.xs}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    width: 80%;
  }
`;

const FormBody = styled.div`
  width: 100%;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    width: 80%;
  }
`;
const Header = styled.h2``;

const FormSelectButtons = styled.div`
  display: flex;
  align-self: stretch;
`;

interface ButtonProps {
  active: boolean;
  inactive?: boolean;
}
const FormSelectButton = styled.button<ButtonProps>`
  padding: 0.75rem 1rem;
  border: none;
  color: ${(p) => p.theme.white};
  background: ${(p) => p.theme.grey};
  width: max-content;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  transition: flex 400ms cubic-bezier(0, 0, 0.2, 1), background 200ms ease,
    transform 200ms cubic-bezier(0, 0, 0.2, 1);
  ${(p) =>
    p.active &&
    css`
      color: ${p.theme.white};
      background: ${p.theme.primary};
      flex: 1;

      @media screen and (min-width: ${(p) => p.theme.breakpoints.xs}) {
        transform: translateY(-0.2rem);
        flex: unset;
      }
    `};

  @media screen and (min-width: ${(p) => p.theme.breakpoints.xs}) {
    border-radius: 10px 10px 0 0;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 15vh;
  margin-top: 2rem;

  background: linear-gradient(
      ${(p) => rgba(p.theme.black, 0.6)},
      ${(p) => rgba(p.theme.black, 0.6)}
    ),
    url(${background});
  background-size: cover;

  background-position: center;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    margin: 0;
    /* width is calc-ed on the third point of form's polygon */
    width: 60%;

    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
`;

export default Reservation;
