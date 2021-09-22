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

  const isFormValid = true;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
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
            name="name"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            isTouched={nameIsTouched}
            onBlur={nameBlurHandler}
            validators={[isEmpty(enteredName, "name")]}
          />
          <Input
            type="text"
            name="email-adress"
            id="email-adress"
            value={enteredEmail}
            onChange={emailChangeHandler}
            isTouched={emailIsTouched}
            onBlur={emailBlurHandler}
            validators={[
              isNotEmail(enteredEmail),
              isEmailInStorage(enteredEmail),
            ]}
          />
          <Input
            type="password"
            name="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            isTouched={passwordIsTouched}
            validators={[isEmpty(enteredPassword, "password")]}
          />
          <Input
            type="password"
            name="confirm-password"
            id="confirm-password"
            value={enteredConfirmPass}
            onChange={confirmPassChangeHandler}
            onBlur={confirmPassBlurHandler}
            isTouched={confirmPassIsTouched}
            validators={[isSamePassword(enteredPassword, enteredConfirmPass)]}
          />
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
