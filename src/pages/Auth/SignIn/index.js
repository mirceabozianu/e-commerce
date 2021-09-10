import React, { useState } from "react";
import { AuthContainer, AuthFormWrapper } from "../components/styledForm";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setEmail("");
    setPassword("");
  };
  return (
    <AuthContainer>
      <AuthFormWrapper>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Sign In</legend>
            <div>
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                value={email}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                value={password}
              />
            </div>
          </fieldset>
          <div>
            <button type="submit">Sign In</button>
          </div>
          <div>
            <button>Register</button>
          </div>
        </form>
      </AuthFormWrapper>
    </AuthContainer>
  );
}
