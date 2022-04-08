import React from "react";
import { MainSubTitle } from "../Main/Main.styles";
import { Button } from "../StyledComponents/Button";

import FormField from "./FormField";
import { Container } from "./Form.styles";

const Form = ({
  handleAddProduct,
  formValues,
  handleInputChange,
  file,
  handleFile,
}) => {
  return (
    <>
      <Container
        as="form"
        onSubmit={handleAddProduct}
        encType="multipart/form-data"
      >
        <MainSubTitle>Add new Product</MainSubTitle>
        <FormField
          label="Name"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          type="number"
          label="Price"
          id="price"
          name="price"
          value={formValues.price}
          onChange={handleInputChange}
        />
        <FormField
          label="Category"
          id="category"
          name="category"
          value={formValues.category}
          onChange={handleInputChange}
        />
        <FormField
          label="Description"
          id="description"
          name="description"
          value={formValues.description}
          onChange={handleInputChange}
        />
        <FormField
          type="file"
          label="image"
          id="image"
          name="image"
          // value={file}
          onChange={handleFile}
        />
        <Button type="submit">Add</Button>
      </Container>
    </>
  );
};

export default Form;
