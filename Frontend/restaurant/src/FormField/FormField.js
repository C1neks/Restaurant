import React from "react";
import styled from "styled-components";
import { Label, LabelImage } from "./Label";
import { Input, InputImage } from "./Input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormField = ({ onChange, value, label, name, id, type = "text" }) => {
  return (
    <Wrapper>
      {name === "image" ? (
        <>
          <LabelImage htmlFor={id}>{label}</LabelImage>
          <InputImage
            name={name}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
          />
        </>
      ) : (
        <>
          <Label htmlFor={id}>{label}</Label>
          <Input
            name={name}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
          />
        </>
      )}
    </Wrapper>
  );
};

export default FormField;
