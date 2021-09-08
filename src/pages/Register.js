import React from "react";
import { Article, Main } from "../styled/Styles";

const Register = () => {
  return (
    <Article>
      <Main>
        <form>
          <fieldset>
            <legend>Register</legend>
            <div>
              <label htmlFor="name">Name</label>
              <input name="text" id="name" />
            </div>
            <div>
              <label htmlFor="email-adress">Email</label>
              <input name="email-adress" id="email-adress" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <input type="password" name="password" id="password" />
            </div>
          </fieldset>
          <div>
            <input onClick="" type="submit" value="Register" />
          </div>
        </form>
      </Main>
    </Article>
  );
};
export default Register;
