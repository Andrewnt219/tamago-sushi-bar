import React from 'react';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components/macro';
import { ReservationForm1 } from './components/ReservationForm1';
import { useFormStep } from '../../hook';
import { BaseButton } from '../../components/ui/BaseButton';
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
  prefix: 'mr' | 'mrs' | 'ms' | 'dr' | 'name';
  phoneNumber: string;
  email: string;
  date: string;
  time: string;
  guests: '1' | '2-4' | '4-8';
}

const Reservation: React.FC<ReservationProps> = () => {
  const NUMBER_OF_STEP = 2;
  const [currentStep, nextStep, prevStep, jumpToStep] = useFormStep(
    NUMBER_OF_STEP
  );
  const {
    handleSubmit,
    errors,
    register,
    formState,
    triggerValidation,
  } = useForm<FormValues>({
    mode: 'onBlur',
    validateCriteriaMode: 'all',
  });
  const [formValues, handleChange] = useFormState<FormValues>({
    preferredName: '',
    prefix: 'name',
    phoneNumber: '',
    email: '',
    date: add(new Date(), { days: 1 }).toDateString(),
    time: roundToNearestMinutes(new Date(), { nearestTo: 15 }).toString(),
    guests: '1',
  });

  const onSubmitStep1 = handleSubmit((_, __) => {
    nextStep();
  });
  const onSubmitStep2 = handleSubmit((data, __) => {
    console.log(data);
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
            <FormSelectButton
              active={currentStep === 1}
              onClick={() => jumpToStep(1)}
            >
              Form 1
            </FormSelectButton>

            <FormSelectButton
              active={currentStep === 2}
              onClick={() => jumpToStep(2)}
            >
              Form 2
            </FormSelectButton>
          </FormHeader>

          {form}

          <FormFooter>
            <FormController disabled={currentStep === 1} onClick={prevStep}>
              Prev
            </FormController>

            <FormController
              disabled={!formState.isValid || currentStep === NUMBER_OF_STEP}
              onClick={nextStep}
            >
              Next
            </FormController>
          </FormFooter>
        </FormContainer>
        <Image />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.section`
  max-width: 90vw;
  margin: 0 auto;
  position: relative;
  height: 80vh;

  padding: 10vw;
`;

interface FormContainerProps {}
const FormContainer = styled.div<FormContainerProps>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  shape-margin: 2rem;
  background: ${(p) => p.theme.white};
  z-index: ${(p) => p.theme.zIndex.lw};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
    width: 50%;
  }
`;
const FormHeader = styled.div``;
const Header = styled.h2``;
const FormFooter = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
`;

interface ButtonProps {
  active: boolean;
}
const FormSelectButton = styled.button<ButtonProps>`
  background: ${(p) => p.active && p.theme.primary};
`;

const FormController = styled(BaseButton).attrs({ contained: true })``;

const Image = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;

  background: linear-gradient(
      ${(p) => rgba(p.theme.black, 0.6)},
      ${(p) => rgba(p.theme.black, 0.6)}
    ),
    url(${background});
  background-size: cover;

  background-position: center;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    /* width is calc-ed on the third point of form's polygon */
    width: 60%;
  }
`;

export default Reservation;
