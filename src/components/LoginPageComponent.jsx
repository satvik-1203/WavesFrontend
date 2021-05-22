import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

//actions

import fetchToken from "../actions/fetchToken";
import userData from "../actions/userData";

//components

import InputFelid from "../common/InputFelid";

//misc

import loginInputs from "../misc/loginInputs";

// Api import

import { loginApi } from "../api";

const LoginPageComponent = () => {
  //state variables

  const [inputFelids, setInputFelids] = useState(loginInputs);

  // dispatcher

  const dispatch = useDispatch();

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
      const token = result.data["x-jwt-token"];
      dispatch(fetchToken(token));
      dispatch(userData(result.data.userData));
      setInputFelids(loginInputs);
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
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPageComponent;
