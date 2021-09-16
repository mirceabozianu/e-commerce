import React from "react";
import { AuthContainer, AuthFormWrapper } from "../components/styledForm";
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
        <form onSubmit={formSubmitHandler}>
          <h1>Register</h1>
          <div>
            <label htmlFor="name">Name</label>
            <input
              name="text"
              id="name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameInputHasError && <p>Name must not be empty</p>}
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
            {emailInputHasError && <p>You must type a valid email</p>}
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
            {passwordInputHasError && <p>You must type a password</p>}
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
              <p>You must type the same password</p>
            )}
          </div>
          <div>
            <button disabled={!isFormValid} type="submit" value="Register">
              Register
            </button>
          </div>
        </form>
      </AuthFormWrapper>
    </AuthContainer>
  );
};
export default Register;
