import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Joi from "joi";
import axios from "axios";
import { customerApi } from "../api";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({});
  const [uniqueEmail, setUniqueEmail] = useState(true);
  const history = useHistory();

  const postCustomer = {
    email: email,
    name: name,
    password: password,
  };

  const handlePostRequest = async () => {
    axios
      .post(customerApi(), postCustomer)
      .then(() => {
        setUniqueEmail(true);
        history.push("/login");
      })
      .catch(setUniqueEmail(false));
  };

  return (
    <div>
      <div className="signUpPage">
        <div className="email">
          <label htmlFor="emailInput">
            Email<span> *</span>
          </label>
          <input
            value={email}
            type="text"
            placeholder="Email"
            name="emailInput"
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value.trim() === "") {
                setErr({
                  ...err,
                  email: "Email is a required field",
                });
              } else {
                setErr({
                  ...err,
                  email: undefined,
                });
              }
            }}
          />
          {err.email && <div className=" err mailError">{err.email}</div>}
          {!uniqueEmail && (
            <div className=" err mailError">Email already exist</div>
          )}
        </div>
        <div className="name">
          <label htmlFor="nameInput">
            Name <span> *</span>
          </label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value.trim() === "") {
                setErr({
                  ...err,
                  name: "Name is a required field",
                });
              } else {
                setErr({
                  ...err,
                  name: undefined,
                });
              }
            }}
            type="text"
            placeholder="Name"
            name="nameInput"
          />
          {err.name && <div className="err mailError">{err.name}</div>}
        </div>
        <div className="password">
          <label htmlFor="passwordInput">
            Password <span> *</span>
          </label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.trim() === "") {
                setErr({
                  ...err,
                  password: "Password is a required field",
                });
              } else {
                setErr({
                  ...err,
                  password: undefined,
                });
              }
            }}
            type="password"
            placeholder="Password"
            name="passwordInput"
          />
          {err.password && <div className="err mailError">{err.password}</div>}
        </div>
      </div>
      <button onClick={handlePostRequest} className="signUpBtn">
        Submit
      </button>
    </div>
  );
};

export default SignUpPage;
