import React, { useContext, useState } from "react";
import { Container } from "../FormField/Form.styles";
import { MainSubTitle } from "../Main/Main.styles";
import FormField from "../FormField/FormField";
import { Button } from "../StyledComponents/Button";
import { MenuLink } from "../NavBar/Navbar.styles";
import { LoginLink } from "./Register.styles";
import axios from "axios";
import { userService } from "../services/services";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "../Login/Login";
import { LoggedContext } from "../App";

const initialUserFormState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const context = useContext(LoggedContext);
  const [formUserValues, setFormUserValues] = useState(initialUserFormState);
  const createUser = async (registerValues) => {
    await userService.registerUser(registerValues);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formUserValues.name,
      email: formUserValues.email,
      password: formUserValues.password,
    };
    createUser(newUser);
    setFormUserValues(initialUserFormState);
  };
  const handleUserInputChange = (e) => {
    setFormUserValues({
      ...formUserValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      {context.logged ? (
        <Redirect to="/" />
      ) : (
        <>
          <Container as="form" onSubmit={handleAddUser}>
            <MainSubTitle>Register</MainSubTitle>
            <FormField
              label="Name"
              id="name"
              name="name"
              value={formUserValues.name}
              onChange={handleUserInputChange}
            />

            <FormField
              type="email"
              label="Email"
              id="email"
              name="email"
              value={formUserValues.email}
              onChange={handleUserInputChange}
            />
            <FormField
              type="password"
              label="Password"
              id="password"
              name="password"
              value={formUserValues.password}
              onChange={handleUserInputChange}
            />
            <Button type="submit">Add</Button>
            <LoginLink to="/login">I have an account</LoginLink>
          </Container>
        </>
      )}
    </>
  );
};

export default Register;
