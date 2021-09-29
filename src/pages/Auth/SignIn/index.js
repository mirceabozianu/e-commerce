import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "components/common/Input";
import { useInput } from "utils/hooks";
import {
  AuthContainer,
  AuthFormWrapper,
  ButtonWrapper,
} from "pages/Auth/components/styledForm";
import {
  isNotEmpty,
  isEmail,
  isEmailNotInStorage,
  isPasswordIncorrect,
} from "utils/validators";

const SignIn = () => {
  const emailInputField = useInput([isNotEmpty, isEmail]);
  const passwordInputField = useInput([isNotEmpty]);
  const [emailErrors, setEmailErrors] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (isEmailNotInStorage(emailInputField.value)) {
      setEmailErrors([isEmailNotInStorage(emailInputField.value)]);
      return;
    }
    if (isPasswordIncorrect(emailInputField.value, passwordInputField.value)) {
      setPasswordErrors([
        isPasswordIncorrect(emailInputField.value, passwordInputField.value),
      ]);
      return;
    }
  };
  return (
    <AuthContainer>
      <AuthFormWrapper>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="Email Adress"
            value="email-adress"
            {...emailInputField}
            errors={[...emailInputField.errors, emailErrors]}
          />
          <Input
            type="password"
            name="Password"
            value="password"
            {...passwordInputField}
            errors={[...passwordInputField.errors, passwordErrors]}
          />
          <ButtonWrapper>
            <button type="submit" value="Sign In">
              Sign In
            </button>
          </ButtonWrapper>
          <ButtonWrapper>
            <button type="button" value="Register">
              <Link to="/register">Register</Link>
            </button>
          </ButtonWrapper>
        </form>
      </AuthFormWrapper>
    </AuthContainer>
  );
};
export default SignIn;
