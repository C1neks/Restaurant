import React from "react";

import { Label, LabelImage } from "./Label";
import { Input, InputImage } from "./Input";
import { Wrapper } from "./AddProductForm.styles";

interface Props {
  onChange: (e: any) => void;
  value: string | HTMLInputElement;
  label: string;
  name: string;
  id: string;
  type: string;
}

const FormField: React.FC<Props> = ({
  onChange,
  value,
  label,
  name,
  id,
  type = "text",
}) => {
  return (
    <Wrapper>
      {name === "image" ? (
        <>
          <LabelImage htmlFor={id}>{label}</LabelImage>
          <InputImage
            name={name}
            id={id}
            type={type}
            onChange={onChange}
            required
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
