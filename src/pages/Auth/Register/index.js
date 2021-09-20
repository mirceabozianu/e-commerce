import React from "react";
import {
  AuthContainer,
  AuthFormWrapper,
  ErrorText,
  ButtonWrapper,
} from "../components/styledForm";
import useInput from "../components/authHook";

const Register = () => {
  const isNotEmpty = (name) => name.trim() !== "";
  const isEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };
  const isSamePassword = (pass, confirmpass) => {
    return pass === confirmpass;
  };

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredConfirmPass,
    isValid: enteredConfirmPassIsValid,
    valueChangeHandler: confirmPassChangeHandler,
    valueBlurHandler: confirmPassBlurHandler,
    reset: resetConfirmPassInput,
  } = useInput(isNotEmpty);

  let isFormValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredConfirmPassIsValid &&
    isSamePassword(enteredPassword, enteredConfirmPass)
  ) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetPasswordInput();
    resetConfirmPassInput();
  };

  return (
    <AuthContainer>
      <AuthFormWrapper>
        <h1>Register</h1>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              name="text"
              id="name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameInputHasError && <ErrorText>Name must not be empty</ErrorText>}
          </div>
          <div>
            <label htmlFor="email-adress">Email</label>
            <input
              name="email-adress"
              id="email-adress"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailInputHasError && (
              <ErrorText>You must type a valid email</ErrorText>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordInputHasError && (
              <ErrorText>You must type a password</ErrorText>
            )}
          </div>
          <div>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              value={enteredConfirmPass}
              onChange={confirmPassChangeHandler}
              onBlur={confirmPassBlurHandler}
            />

            {!isSamePassword(enteredPassword, enteredConfirmPass) && (
              <ErrorText>Passwords are not matching</ErrorText>
            )}
          </div>
          <ButtonWrapper>
            <button disabled={!isFormValid} type="submit" value="Register">
              Register
            </button>
          </ButtonWrapper>
        </form>
      </AuthFormWrapper>
    </AuthContainer>
  );
};
export default Register;
