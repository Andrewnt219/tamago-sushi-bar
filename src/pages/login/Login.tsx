import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import {
  useLocation,
  RouteComponentProps,
  useHistory,
  Redirect,
} from 'react-router-dom';
import { TextField } from '../../components/ui/form/TextField';
import { BaseForm } from '../../components/ui/form/BaseForm';
import { useForm } from 'react-hook-form';
import { BaseButton } from '../../components/ui/BaseButton';
import { useDispatch, useSelector } from 'react-redux';
import { authUser, userSelector } from '../../features/userSlice';
import { useTitle, useScrollToTop } from '../../hook';
import { BaseLogo } from '../../components/ui/BaseLogo';
import { StyledLink } from '../../components/navigation/StyledLink';

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
  const history = useHistory();
  let pathname = state?.from?.pathname ?? '/';
  const { register, errors, handleSubmit, formState } = useForm<
    LoginFormValues
  >({
    mode: 'onChange',
    validateCriteriaMode: 'all',
  });

  const dispatch = useDispatch();
  const { email } = useSelector(userSelector);

  const onSubmit = handleSubmit((formData) => {
    dispatch(authUser(formData));
    history.push(pathname);
  });

  return email ? (
    <Redirect to="/me" />
  ) : (
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
          Login
        </SubmitButton>
        <StyledSpan>
          Don't have an account? <Link to="/register">Sign up</Link>
        </StyledSpan>
      </Form>
    </Container>
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
  display: block;
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

const StyledSpan = styled.span`
  display: block;
  width: max-content;
  margin: 2rem auto 0 auto;
`;

export default Login;
