import React, { useState } from "react";
import { Article, Main } from "../styled/Styles";
import lscache from "lscache";
import Input from "../components/Input/Input";
import { users, userEmails, emailRegex } from "../utils/constants";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState("");

  const checkEmail = () => {
    if (userEmails.length > 0 && userEmails.includes(email)) {
      setError((prevErrors) => ({
        ...prevErrors,
        email: "Email already exists",
      }));
      return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkEmail();
    lscache.set(
      "users",
      [...users, { email: `${email}`, password: `${password}` }],
      3000
    );
  };
  const onBlurEmailCheck = (event) => {
    event.preventDefault();
    if (!emailRegex.test(`${email}`)) {
      setError((prevErrors) => ({
        ...prevErrors,
        email: `Please enter a valid e-mail`,
      }));
    }
    return;
  };
  const onFocusHandler = (event) => {
    event.preventDefault();
    setError("");
  };
  const onBlurPasswordCheck = (event) => {
    event.preventDefault();
    if (!(password===confirmPassword)) {
      setError((prevErrors) => ({
        ...prevErrors,
        password: "Passwords not matching",
      }));
    }
    return;
  };

  return (
    <Article>
      <Main>
        <div>
          <h1>Register</h1>
          <label htmlFor="email-adress">
            <p>Email</p>
            <Input
              error={error.email}
              name="email-adress"
              id="email-adress"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={onBlurEmailCheck}
              onFocus={onFocusHandler}
            />
            <p>{error.email}</p>
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={onBlurPasswordCheck}
              onFocus={onFocusHandler}
            />
            <p>{error.password}</p>
          </label>
          <label htmlFor="password">
            <p>Confirm Password</p>
            <input
              required
              type="password"
              id="confirm-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={onBlurPasswordCheck}
              onFocus={onFocusHandler}
            />
            <p>{error.password}</p>
          </label>

          <div>
            <button onClick={handleSubmit} type="submit">
              Register
            </button>
          </div>
        </div>
      </Main>
    </Article>
  );
};
export default Register;
