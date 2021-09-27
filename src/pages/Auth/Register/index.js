import React from "react";
import Input from "components/common/Input";
import {
  AuthContainer,
  AuthFormWrapper,
  ButtonWrapper,
} from "pages/Auth/components/styledForm";
import { useInput } from "utils/hooks";
import { setUsers } from "services/localStorage";
import { isEmpty, isNotEmail, isSamePassword } from "utils/validators";

const Register = () => {
  const nameInputField = useInput();
  const emailInputField = useInput();
  const passwordInputField = useInput();
  const confirmPassInputField = useInput();

  const nameErrors = [isEmpty(nameInputField.value, "name")];
  const emailErrors = [isNotEmail(emailInputField.value)];
  const passwordErrors = [isEmpty(passwordInputField.value, "password")];
  const confirmPassErrors = [
    isSamePassword(passwordInputField.value, confirmPassInputField.value),
  ];

  const getErrorMessages = (...errors) => {
    return errors.flat().filter((error) => Boolean(error) !== false);
  };

  const isFormNotValid =
    getErrorMessages(nameErrors, emailErrors, passwordErrors, confirmPassErrors)
      .length > 0;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (isFormNotValid) {
      return;
    }

    setUsers({
      name: nameInputField.value,
      email: emailInputField.value,
      password: passwordInputField.value,
    });
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
            errors={getErrorMessages(nameErrors)}
            {...nameInputField}
          />
          <Input
            type="text"
            name="Email Adress"
            id="email-adress"
            errors={getErrorMessages(emailErrors)}
            {...emailInputField}
          />
          <Input
            type="password"
            name="Password"
            id="password"
            errors={getErrorMessages(passwordErrors)}
            {...passwordInputField}
          />
          <Input
            type="password"
            name="Confirm Password"
            id="confirm-password"
            errors={getErrorMessages(confirmPassErrors)}
            {...confirmPassInputField}
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
