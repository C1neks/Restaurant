import React from "react";
import { Container } from "../FormField/Form.styles";
import { MainSubTitle } from "../Main/Main.styles";
import FormField from "../FormField/FormField";
import { Button } from "../StyledComponents/Button";
import { MenuLink } from "../NavBar/Navbar.styles";
import { LoginLink } from "./Register.styles";

const Register = ({ handleAddUser, formUserValues, handleUserInputChange }) => {
  return (
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
  );
};

export default Register;
