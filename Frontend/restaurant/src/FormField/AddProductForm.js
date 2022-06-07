import React, { useEffect, useRef, useState } from "react";
import { MainSubTitle } from "../Main/Main.styles";
import { Button } from "../StyledComponents/Button";

import FormField from "./FormField";
import { Container, ShadowContainer } from "./AddProductForm.styles";
import { productService } from "../services/services";

const initialFormState = {
  name: "",
  price: "",
  category: "",
  description: "",
};

const AddProductForm = ({}) => {
  const createProduct = async (a) => {
    await productService.addProduct(a);
  };
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const [file, setFile] = useState(null);
  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData(myContainer.current);

    await createProduct(formData);
    setFormValues(initialFormState);
  };
  const myContainer = useRef(null);

  return (
    <>
      <Container
        as="form"
        id="myForm"
        name="myForm"
        onSubmit={handleAddProduct}
        encType="multipart/form-data"
        ref={myContainer}
      >
        <MainSubTitle adminAccount>Add new Product</MainSubTitle>
        <ShadowContainer>
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
            label="Choose a file..."
            id="image"
            name="image"
            // value={file}
            onChange={handleFile}
          />
          <Button editAddButton type="submit">
            Add
          </Button>
        </ShadowContainer>
      </Container>
    </>
  );
};

export default AddProductForm;
