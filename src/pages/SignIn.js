import React, { useState } from "react";
import { Article, Main } from "../styled/Styles";
import Button from "../components/Button/Button";

export default function SignIn({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setEmail("");
    setPassword("");
  };
  return (
    <Article>
      <Main>
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
            <Button type="submit">Sign In</Button>
          </div>
          <div>
            <Button>Register</Button>
          </div>
        </form>
      </Main>
    </Article>
  );
}
