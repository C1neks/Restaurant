import React from "react";

import { LabelImage } from "./Label";
import { InputImage } from "./Input";
import { Wrapper } from "./AddProductForm.styles";

interface Props {
  onChange: (e: any) => void;

  label: string;
  name: string;
  id: string;
  type: string;
}

const FileFormField: React.FC<Props> = ({
  onChange,
  label,
  name,
  id,
  type = "text",
}) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default FileFormField;
