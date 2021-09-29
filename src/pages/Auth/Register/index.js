import React, { useState } from "react";
import Input from "components/common/Input";
import {
  AuthContainer,
  AuthFormWrapper,
  ButtonWrapper,
} from "pages/Auth/components/styledForm";
import { useInput } from "utils/hooks";
import { setUsers } from "services/localStorage";
import {
  isNotEmpty,
  isEmail,
  isSamePassword,
  isEmailInStorage,
} from "utils/validators";

const Register = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const nameInputField = useInput([isNotEmpty]);
  const emailInputField = useInput([isEmail, isNotEmpty]);
  const passwordInputField = useInput([isNotEmpty]);
  const confirmPassInputField = useInput([isNotEmpty]);
  const samePasswordError = [
    isSamePassword(passwordInputField.value, confirmPassInputField.value),
  ].filter(Boolean);

  const areInputsBlurred =
    nameInputField.isTouched &&
    emailInputField.isTouched &&
    passwordInputField.isTouched &&
    confirmPassInputField.isTouched;

  const inputFieldErrors = [
    nameInputField.errors,
    emailInputField.errors,
    passwordInputField.errors,
    confirmPassInputField.errors,
    samePasswordError,
  ];

  const isFormNotValid = areInputsBlurred
    ? inputFieldErrors.flat().length > 0
    : true;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (isFormNotValid) {
      return;
    }
    if (!isEmailInStorage(emailInputField.value)) {
      setUsers({
        name: nameInputField.value,
        email: emailInputField.value,
        password: passwordInputField.value,
      });
      nameInputField.resetInput();
      emailInputField.resetInput();
      passwordInputField.resetInput();
      confirmPassInputField.resetInput();
      setSuccessMessage(true);
    }
  };

  return (
    <AuthContainer>
      <AuthFormWrapper>
        <h1>Register</h1>
        <form onSubmit={formSubmitHandler}>
          <Input type="text" name="Name" id="name" {...nameInputField} />
          <Input
            type="text"
            name="Email Adress"
            id="email-adress"
            {...emailInputField}
          />
          <Input
            type="password"
            name="Password"
            id="password"
            {...passwordInputField}
          />
          <Input
            type="password"
            name="Confirm Password"
            id="confirm-password"
            {...confirmPassInputField}
            errors={[...confirmPassInputField.errors, samePasswordError]}
          />
          <ButtonWrapper>
            <button disabled={isFormNotValid} type="submit" value="Register">
              Register
            </button>
          </ButtonWrapper>
        </form>
        {successMessage && <p>User was created successfully.</p>}
      </AuthFormWrapper>
    </AuthContainer>
  );
};
export default Register;
