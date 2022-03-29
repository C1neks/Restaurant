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
import { ItemsContext } from "../App";

const initialLoginFormState = {
  name: "",
  password: "",
};

const LoginPage = ({ userDetails, handleLogout }) => {
  const context = useContext(ItemsContext);
  const [loginValues, setLoginValues] = useState(initialLoginFormState);
  const handleLoginInputChange = (e) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = (credentials) => {
    userService.loginUser(credentials).then((response) => {
      console.log("RESPO:", response.data.isValid.user._id);
      const info = response.data.accessToken;
      localStorage.setItem("userInfo", info);

      localStorage.setItem("userID", response.data.isValid.user._id);
      window.location.reload();
    });
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
