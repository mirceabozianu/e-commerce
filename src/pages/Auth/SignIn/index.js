import React, { useState } from "react";
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
  isEmailInStorage,
  isPasswordIncorrect,
} from "utils/validators";

const SignIn = () => {
  const emailInputField = useInput([isNotEmpty, isEmail]);
  const passwordInputField = useInput([isNotEmpty]);
  const [successMessage, setSuccessMessage] = useState(false);
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!isEmailInStorage(emailInputField.value)) {
      setEmailErrors([
        ...emailInputField.errors,
        isEmailInStorage(emailInputField.value, "Email cannot be found"),
      ]);
      return;
    }
    if (isPasswordIncorrect(emailInputField.value, passwordInputField.value)) {
      setPasswordErrors([
        ...passwordInputField.errors,
        isPasswordIncorrect(emailInputField.value, passwordInputField.value),
      ]);
      return;
    } else {
      setSuccessMessage(true);
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
            errors={emailErrors.filter(Boolean)}
          />
          <Input
            type="password"
            name="Password"
            value="password"
            {...passwordInputField}
            errors={passwordErrors.filter(Boolean)}
          />
          <ButtonWrapper>
            <button type="submit" value="Sign In">
              Sign In
            </button>
          </ButtonWrapper>
          <ButtonWrapper>
            <button type="button" value="Register">
              <a href="register">Register</a>
            </button>
          </ButtonWrapper>
        </form>
        {successMessage && <p>You are logged in!</p>}
      </AuthFormWrapper>
    </AuthContainer>
  );
};
export default SignIn;
