import React, { useContext, useState } from "react";
import Login from "./Login";
import { Redirect } from "react-router-dom";
import { userService } from "../services/services";
import { LoggedContext } from "../App";

const initialLoginFormState = {
  name: "",
  password: "",
};

type loginCredentials = {
  name: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const context = useContext(LoggedContext);
  const [loginValues, setLoginValues] = useState<loginCredentials>(
    initialLoginFormState
  );
  const handleLoginInputChange = (e: {
    target: { name: string; value: any };
  }) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (credentials: loginCredentials) => {
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

  const handleLoginUser = (e: { preventDefault: () => void }) => {
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
        />
      )}
    </>
  );
};

export default LoginPage;
