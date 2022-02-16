import React from "react";
import { Container } from "../FormField/Form.styles";
import { MainSubTitle } from "../Main/Main.styles";
import FormField from "../FormField/FormField";
import { Button } from "../StyledComponents/Button";
import { LoginLink } from "../Register/Register.styles";

const Login = ({
  loginValues,
  handleLoginInputChange,
  handleLoginUser,
  handleLogout,
}) => {
  return (
    <>
      <Container as="form" onSubmit={handleLoginUser}>
        <MainSubTitle>Login</MainSubTitle>
        <FormField
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
        <Button type="submit">Login</Button>
        <Button onClick={() => handleLogout()}>Logout</Button>
        <LoginLink to="/register">I don't have an account</LoginLink>
      </Container>
    </>
  );
};

export default Login;
