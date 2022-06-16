import React, { useContext, useState } from "react";
import axios from "axios";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { userService } from "../services/services";
import { LoggedContext } from "../App";

const initialLoginFormState = {
  name: "",
  password: "",
};

const LoginPage = ({ userDetails, handleLogout }) => {
  const context = useContext(LoggedContext);
  const [loginValues, setLoginValues] = useState(initialLoginFormState);
  const handleLoginInputChange = (e) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (credentials) => {
    try {
      const response = await userService.loginUser(credentials);
      const info = response.data.accessToken;
      localStorage.setItem("userInfo", info);
      localStorage.setItem("userID", response.data.isValid.user._id);
      alert("Login Successful");
      window.location.reload();
    } catch (e) {
      alert("Wrong username or password");
    }
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    const userToLogin = {
      name: loginValues.name,
      password: loginValues.password,
    };
    loginUser(userToLogin);
    setLoginValues(initialLoginFormState);
  };

  return (
    <>
      {context.logged ? (
        <Redirect to="/" />
      ) : (
        <Login
          loginValues={loginValues}
          handleLoginInputChange={handleLoginInputChange}
          handleLoginUser={handleLoginUser}
          userDetails={userDetails}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default LoginPage;
