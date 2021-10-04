import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
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
import history from "services/history";

const SignIn = () => {
  const emailInputField = useInput([isNotEmpty, isEmail]);
  const passwordInputField = useInput([isNotEmpty]);
  const [emailErrorsOnSubmit, setEmailErrorsOnSubmit] = useState(false);
  const [passwordErrorsOnSubmit, setPasswordErrorsOnSubmit] = useState(false);

  const inputFieldErrors = [
    emailInputField.errors,
    !emailInputField.isTouched,
    passwordInputField.errors,
    !passwordInputField.isTouched,
  ]
    .flat()
    .filter(Boolean);

  const isFormNotValid = inputFieldErrors.length > 0;

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (isEmailNotInStorage(emailInputField.value)) {
      setEmailErrorsOnSubmit([isEmailNotInStorage(emailInputField.value)]);
      return;
    }
    if (isPasswordIncorrect(emailInputField.value, passwordInputField.value)) {
      setPasswordErrorsOnSubmit([
        isPasswordIncorrect(emailInputField.value, passwordInputField.value),
      ]);
      return;
    }
    history.push("/");
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
            errors={[...emailInputField.errors, emailErrorsOnSubmit]}
          />
          <Input
            type="password"
            name="Password"
            value="password"
            {...passwordInputField}
            errors={[...passwordInputField.errors, passwordErrorsOnSubmit]}
          />
          <ButtonWrapper>
            <button disabled={isFormNotValid} type="submit" value="Sign In">
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
export default withRouter(SignIn);
