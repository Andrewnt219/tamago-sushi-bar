import React from 'react';
import styled from 'styled-components/macro';
import { ErrorMessage, FormContextValues } from 'react-hook-form';

export interface ErrorTextProps {
  name: string;
  errors: FormContextValues['errors'];
}

/**
 * @description a text hint for an invalid input
 * @param name must be the same with the `name` of the input this text connected with
 * @param errors must be the same with the `errors` of the connected input; errors from react-hook-form/useForm()
 */
const ErrorText: React.FC<ErrorTextProps> = ({ name, errors }) => {
  return (
    <Container>
      <ErrorMessage errors={errors} name={name}>
        {({ message, messages }) => {
          if (messages) {
            return Object.entries(messages).map(([type, message]) => (
              <Text key={type}>{message}</Text>
            ));
          }

          return <p>{message}</p>;
        }}
      </ErrorMessage>
    </Container>
  );
};

export default ErrorText;

/* To avoid that line jump */
interface ContainerProps {}
const Container = styled.div<ContainerProps>`
  min-height: 2rem;
`;

interface TextProps {}
const Text = styled.p<TextProps>`
  font-size: inherit;
  color: ${(p) => p.theme.error};
  font-style: italic;
`;
