import React from "react";
import styled from "styled-components";
import { Label } from "./Label";
import { Input } from "./Input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormField = ({ onChange, value, label, name, id, type = "text" }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default FormField;
