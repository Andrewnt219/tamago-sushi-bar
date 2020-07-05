import React, { ReactElement } from 'react';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components/macro';
import { useLocation, RouteComponentProps, Redirect } from 'react-router-dom';
import { TextField } from '../../components/ui/form/TextField';
import { BaseForm } from '../../components/ui/form/BaseForm';
import { useForm } from 'react-hook-form';
import { BaseButton } from '../../components/ui/BaseButton';
import { useDispatch, useSelector } from 'react-redux';
import { authUser, userSelector } from '../../features/userSlice';
import { useTitle, useScrollToTop } from '../../hook';
import { BaseLogo } from '../../components/ui/BaseLogo';
import { StyledLink } from '../../components/navigation/StyledLink';
import Spinner from '../../components/ui/LoadingScreen/Spinner/Spinner';

type Props = {};

export type LoginFormValues = {
  email: string;
  password: string;
};

function Login(props: Props): ReactElement {
  useTitle('Login');
  useScrollToTop();

  // note the undefined
  const { state } = useLocation<
    { from?: RouteComponentProps['location'] } | undefined
  >();
  let pathname = state?.from?.pathname ?? '/me';
  const { register, errors, handleSubmit, formState } = useForm<
    LoginFormValues
  >({
    mode: 'onChange',
    validateCriteriaMode: 'all',
  });

  const dispatch = useDispatch();
  const { email, isLoading, error } = useSelector(userSelector);

  const onSubmit = handleSubmit((formData) => {
    dispatch(authUser(formData));
  });

  if (email) {
    return <Redirect to={pathname} />;
  }

  return (
    <ThemeProvider
      theme={(theme): DefaultTheme => ({ ...theme, primary: theme.formTheme })}
    >
      <Container>
        <HeaderContainer>
          <Logo />
          <Header>Welcome Back</Header>
          <Subheader>Sign in to get the best experience</Subheader>
        </HeaderContainer>

        <Form onSubmit={onSubmit} noValidate>
          <TextField
            id="login-email"
            label="Email"
            name="email"
            type="email"
            errors={errors}
            register={register({
              required: 'Email is required',
              pattern: {
                value: /.*@.*\..+/,
                message: 'Not a valid email',
              },
            })}
          />

          <TextField
            id="login-password"
            label="Password"
            name="password"
            type="password"
            errors={errors}
            register={register({ required: 'Password is required' })}
          />

          <SubmitButton contained disabled={!formState.isValid} type="submit">
            {isLoading ? <Spinner color="#fff" size="1.2rem" /> : 'Login'}
          </SubmitButton>
          {error && <ErrorText>{error}</ErrorText>}
          <StyledSpan>
            Don't have an account? <Link to="/register">Sign up</Link>
          </StyledSpan>
        </Form>
      </Container>
    </ThemeProvider>
  );
}

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
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

type FormProps = {};
const Form = styled(BaseForm)<FormProps>``;

type SubmitButtonProps = {};
const SubmitButton = styled(BaseButton)<SubmitButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 1rem 0;
  border-radius: 4px;
  min-width: 10rem;
  margin: 0 auto;

  :hover {
    box-shadow: none;
  }
`;

const Link = styled(StyledLink)`
  && {
    color: ${(p) => p.theme.primary};
  }
`;

const ErrorText = styled.p`
  margin-top: 2rem;
  font-size: inherit;
  color: ${(p) => p.theme.error};
  text-align: center;
`;

const StyledSpan = styled.span`
  display: block;
  width: max-content;
  margin: 2rem auto 0 auto;
`;

export default Login;
