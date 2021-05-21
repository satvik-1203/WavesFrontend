import React from "react";
import InputFelid from "../common/InputFelid";
import loginInputs from "../misc/loginInputs";

const LoginPageComponent = () => {
  return (
    <div className="LoginContainer">
      {loginInputs.map((input) => (
        <InputFelid input={input} />
      ))}
      <button className="loginBtn">Login</button>
    </div>
  );
};

export default LoginPageComponent;

{
  /* <div className="email">
<label htmlFor="emailInput">
  Email <span>*</span>
</label>
<input type="text" name="emailInput" placeholder="Email" />
</div>
<div className="password">
<label htmlFor="passwordInput">
  Password <span>*</span>
</label>
<input type="password" name="passwordInput" placeholder="Password" />
</div> */
}
