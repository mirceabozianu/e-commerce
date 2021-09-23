import React from "react";
import Input from "components/common/Input";
import {
  AuthContainer,
  AuthFormWrapper,
  ButtonWrapper,
} from "pages/Auth/components/styledForm";
import { useInput } from "utils/hooks";
import { registerUser } from "services/localStorage";
import {
  isEmpty,
  isNotEmail,
  isEmailInStorage,
  isSamePassword,
} from "utils/validators";

const Register = () => {
  const {
    value: enteredName,
    isTouched: nameIsTouched,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput();
  const {
    value: enteredEmail,
    isTouched: emailIsTouched,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput();
  const {
    value: enteredPassword,
    isTouched: passwordIsTouched,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput();
  const {
    value: enteredConfirmPass,
    isTouched: confirmPassIsTouched,
    valueChangeHandler: confirmPassChangeHandler,
    valueBlurHandler: confirmPassBlurHandler,
    reset: resetConfirmPassInput,
  } = useInput();

  const nameValidators = [isEmpty(enteredName, "name")];
  const emailValidators = [
    isNotEmail(enteredEmail),
    isEmailInStorage(enteredEmail),
  ];
  const passwordValidators = [isEmpty(enteredPassword, "password")];
  const confirmPassValidators = [
    isSamePassword(enteredPassword, enteredConfirmPass),
  ];
  const isFormNotValid = [
    nameValidators,
    emailValidators,
    passwordValidators,
    confirmPassValidators,
  ]
    .flat()
    .some((validator) => typeof validator === "string");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (isFormNotValid) {
      return;
    }
    registerUser(enteredName, enteredEmail, enteredPassword);
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
          <Input
            type="text"
            name="Name"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            isTouched={nameIsTouched}
            onBlur={nameBlurHandler}
            validators={nameValidators}
          />
          <Input
            type="text"
            name="Email Adress"
            id="email-adress"
            value={enteredEmail}
            onChange={emailChangeHandler}
            isTouched={emailIsTouched}
            onBlur={emailBlurHandler}
            validators={emailValidators}
          />
          <Input
            type="password"
            name="Password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            isTouched={passwordIsTouched}
            validators={passwordValidators}
          />
          <Input
            type="password"
            name="Confirm Password"
            id="confirm-password"
            value={enteredConfirmPass}
            onChange={confirmPassChangeHandler}
            onBlur={confirmPassBlurHandler}
            isTouched={confirmPassIsTouched}
            validators={confirmPassValidators}
          />
          <ButtonWrapper>
            <button disabled={isFormNotValid} type="submit" value="Register">
              Register
            </button>
          </ButtonWrapper>
        </form>
      </AuthFormWrapper>
    </AuthContainer>
  );
};
export default Register;
