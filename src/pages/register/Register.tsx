import React, { ReactElement } from 'react';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components/macro';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import {
  registerFireBase,
  userSelector,
  storeUserInfo,
} from '../../features/userSlice';
import { useTitle, useScrollToTop, useFormStep } from '../../hook';
import { RegisterForm1, RegisterFormValues1 } from './components/RegisterForm1';
import { RegisterForm2, RegisterFormValues2 } from './components/RegisterForm2';
import { useFormState } from '../../hook/useFormState';
import { StyledLink } from '../../components/navigation/StyledLink';
import { BaseLogo } from '../../components/ui/BaseLogo';
import { Redirect } from 'react-router-dom';

type Props = {
  className?: string;
  defaultValues?: Partial<RegisterFormValues>;
};

export type RegisterFormValues = RegisterFormValues1 & RegisterFormValues2;

// TODO extract the style between register and login
function Register({ defaultValues }: Props): ReactElement {
  useTitle('Sign up');
  useScrollToTop();

  const dispatch = useDispatch();
  const { error, firebaseIsRegistered, isLoading, userIsStored } = useSelector(
    userSelector
  );
  const [formValues, handleChange] = useFormState<RegisterFormValues>({
    email: '',
    password: '',
    confirmPassword: '',
    preferredName: '',
    address: '',
    phone: '',
  });

  const { register, handleSubmit, errors, getValues, formState } = useForm<
    RegisterFormValues
  >({
    mode: 'onChange',
    validateCriteriaMode: 'all',
    defaultValues: {
      ...defaultValues,
    },
  });

  const onSubmitForm1 = handleSubmit((data) => {
    dispatch(registerFireBase(data));
  });

  const onSubmitForm2 = handleSubmit(() => {
    dispatch(storeUserInfo(formValues));
  });

  const { currentStep, nextStep, prevStep } = useFormStep(2);

  let currentForm: ReactElement;
  switch (currentStep) {
    case 1:
      currentForm = (
        <RegisterForm1
          onSubmit={onSubmitForm1}
          errors={errors}
          register={register}
          isSubmittable={formState.isValid}
          getValues={getValues}
          onNextButtonClicked={nextStep}
          handleChange={handleChange}
          enableNextStep={!!firebaseIsRegistered}
          formValues={formValues}
          isSubmitting={isLoading}
        />
      );
      break;

    case 2:
      currentForm = (
        <RegisterForm2
          onSubmit={onSubmitForm2}
          errors={errors}
          handleChange={handleChange}
          register={register}
          onPrevButtonClicked={prevStep}
          isSubmittable={formState.isValid}
          formValues={formValues}
          isSubmitting={isLoading}
        />
      );
      break;

    default:
      throw new Error('Form step is out of range');
  }

  return (
    <ThemeProvider
      theme={(theme): DefaultTheme => ({ ...theme, primary: theme.formTheme })}
    >
      {userIsStored && <Redirect to="/me" />}
      <Container>
        <HeaderContainer>
          <Logo />
          <Header>Hello new friend</Header>
          <Subheader>Sign up to get exclusive deals</Subheader>
        </HeaderContainer>
        <FormContainer>
          {currentForm}
          {(firebaseIsRegistered === false || userIsStored === false) &&
            error && <SubmitError>{error}</SubmitError>}
        </FormContainer>
        <HelperText>
          Already have an account? <Link to="/login">Sign in</Link>
        </HelperText>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.section`
  display: grid;
  row-gap: 2rem;
  padding: 3vw 2vw;
  box-shadow: ${(p) => p.theme.shadow.button};
  width: 90%;
  margin: 10vh auto 0 auto;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    row-gap: initial;
    grid-template-columns: 1fr 2fr;
    column-gap: 2rem;
    position: relative;
  }
`;

type HeaderContainerProps = {};
const HeaderContainer = styled.aside<HeaderContainerProps>`
  display: grid;
  row-gap: 0.5rem;
  justify-content: center;
  justify-items: center;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    align-content: center;
    background: ${(p) => p.theme.primary};

    color: ${(p) => p.theme.white};

    margin-left: -2vw;
    width: calc(100% + 2vw);
    margin-top: -3vw;
    height: calc(100% + 6vw);
    grid-row: 1/3;
  }
`;

type LogoProps = {};
const Logo = styled(BaseLogo)<LogoProps>`
  width: 7rem;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    width: auto;
    height: 3rem;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;

type HeaderProps = {};
const Header = styled.h2<HeaderProps>``;

type SubheaderProps = {};
const Subheader = styled.h4<SubheaderProps>`
  font-weight: 400;
`;

const FormContainer = styled.article``;
const SubmitError = styled.p`
  font-size: inherit;
  color: ${(p) => p.theme.error};

  margin-top: 2rem;
`;

const Link = styled(StyledLink)`
  && {
    color: ${(p) => p.theme.primary};
  }
`;

const HelperText = styled.span`
  grid-column: -2/-1;
  display: block;
  width: max-content;
  margin: 2rem auto 0 auto;
`;
export default Register;
