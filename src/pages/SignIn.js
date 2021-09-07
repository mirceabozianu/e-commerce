import React, { useState } from "react";
import { Article, Main } from "../styled/Styles";


export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit =  (ev) => {
    ev.preventDefault();
       
  };
  

  return (
    <Article>
      <Main>
        <div onSubmit={handleSubmit}>
          
            <h1>Sign In</h1>
            <label htmlFor="email">
              <p>Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                value={email}
              />
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                value={password}
              />
            </label>
          
          <div>
            <button type="submit">Sign In</button>
          </div>
          <div>
            <input type="button" value="Register" />
          </div>
        </div>
      </Main>
    </Article>
  );
}
