import React from "react";
import FormField from "../FormField/FormField";
import { Button } from "../StyledComponents/Button";
import { LoginLink, RegisterTitle } from "../Register/Register.styles";
import { LoginContainer } from "./Login.styles";
import { Redirect } from "react-router-dom";

interface Props {
  loginValues: {
    name: string;
    password: string;
  };
  handleLoginInputChange: (e: any) => void;
  handleLoginUser: (e: any) => void;
}

const Login: React.FC<Props> = ({
  loginValues,
  handleLoginInputChange,
  handleLoginUser,
}) => {
  return (
    <div>
      <LoginContainer as="form" onSubmit={handleLoginUser}>
        <RegisterTitle>Login</RegisterTitle>
        <FormField
          type="text"
          label="Name"
          id="name"
          name="name"
          value={loginValues.name}
          onChange={handleLoginInputChange}
        />

        <FormField
          type="password"
          label="Password"
          id="password"
          name="password"
          value={loginValues.password}
          onChange={handleLoginInputChange}
        />

        <Button editAddButton type="submit">
          Login
        </Button>
        <LoginLink to="/register">I don't have an account</LoginLink>
      </LoginContainer>
    </div>
  );
};

export default Login;
