import React from "react";
import LoginPageComponent from "../components/LoginPageComponent";
import { useSelector } from "react-redux";
import Profile from "../components/Profile";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <LoginPageComponent />
      <Profile />
    </div>
  );
};

export default LoginPage;
