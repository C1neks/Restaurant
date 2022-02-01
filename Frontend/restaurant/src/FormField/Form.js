import React from "react";
import { MainSubTitle } from "../Main/Main.styles";
import { Button } from "../GlobalStyles";

import FormField from "./FormField";
import { Container } from "./Form.styles";

const Form = ({ handleAddProduct, formValues, handleInputChange }) => {
  return (
    <>
      <Container as="form" onSubmit={handleAddProduct}>
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
        <Button type="submit">Add</Button>
      </Container>
    </>
  );
};

export default Form;
