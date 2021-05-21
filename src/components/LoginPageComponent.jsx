import React, { useState } from "react";
import axios from "axios";

//components

import InputFelid from "../common/InputFelid";

//misc

import loginInputs from "../misc/loginInputs";

// Api import

import { loginApi } from "../api";

const LoginPageComponent = () => {
  //state variables

  const [inputFelids, setInputFelids] = useState(loginInputs);

  // event handlers

  const handleInputChange = (id, change) => {
    const copyInputFelids = [...inputFelids];
    const changedInput = copyInputFelids.find((input) => input.id === id);
    const changedInputIndex = copyInputFelids.findIndex(
      (input) => input.id === id
    );
    copyInputFelids[changedInputIndex] = { ...changedInput, ...change };
    setInputFelids(copyInputFelids);
  };

  const postRequestLogin = async (credentials) => {
    try {
      const result = await axios.post(loginApi(), credentials);

      // storing the token in the storage

      sessionStorage.setItem("x-jwt-token", result.data["x-jwt-token"]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="LoginContainer">
      {inputFelids.map((input) => (
        <InputFelid
          key={input.id}
          input={input}
          handleInputChange={handleInputChange}
        />
      ))}
      <div className="loginButtonContainer">
        <button
          className="loginBtn"
          onClick={() => {
            const credentials = {
              email: inputFelids[0].value,
              password: inputFelids[1].value,
            };
            postRequestLogin(credentials);
            console.log(credentials);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPageComponent;
