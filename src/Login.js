import React from "react";
import "./Login.css";
import logo from "./logo.jpg";
import { loginUrl } from "./spotify";

const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="Spotify Logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
