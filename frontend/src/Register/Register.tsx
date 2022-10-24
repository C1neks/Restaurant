import React, { useContext, useState } from "react";

import FormField from "../FormField/FormField";
import { Button } from "../StyledComponents/Button";

import { LoginLink, RegisterContainer, RegisterTitle } from "./Register.styles";

import { userService } from "../services/services";
import { Redirect } from "react-router-dom";

import { LoggedContext } from "../App";

const initialUserFormState = {
  name: "",
  email: "",
  password: "",
};

const Register: React.FC = () => {
  const context = useContext(LoggedContext);
  const [formUserValues, setFormUserValues] = useState(initialUserFormState);
  const createUser = async (registerValues: {
    name: string;
    email: string;
    password: string;
  }) => {
    await userService.registerUser(registerValues);
  };

  const handleAddUser = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newUser = {
      name: formUserValues.name,
      email: formUserValues.email,
      password: formUserValues.password,
    };
    createUser(newUser);
    setFormUserValues(initialUserFormState);
  };
  const handleUserInputChange = (e: {
    target: { name: string; value: any };
  }) => {
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
          <RegisterContainer as="form" onSubmit={handleAddUser}>
            <RegisterTitle>Register</RegisterTitle>
            <FormField
              type="text"
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
            <Button editAddButton type="submit">
              Add
            </Button>
            <LoginLink to="/login">I have an account</LoginLink>
          </RegisterContainer>
        </>
      )}
    </>
  );
};

export default Register;
