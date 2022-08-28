import React, { useRef, useState } from "react";

import { Button } from "../StyledComponents/Button";

import FormField from "./FormField";
import { Container, ShadowContainer } from "./AddProductForm.styles";
import { productService } from "../services/services";
import { RegisterTitle } from "../Register/Register.styles";
import FileFormField from "./FileFormField";

const initialFormState = {
  name: "",
  price: "",
  category: "",
  description: "",
};

const AddProductForm: React.FC = ({}) => {
  const createProduct = async (a: FormData) => {
    await productService.addProduct(a);
  };
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e: { target: { name: string; value: any } }) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const [file, setFile] = useState(null);
  const handleFile = (e: { target: { files: any[] } }) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(myContainer.current);

    await createProduct(formData);
    setFormValues(initialFormState);
  };
  const myContainer = useRef<HTMLFormElement | undefined>(undefined);

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
        <RegisterTitle adminAccount>Add new Product</RegisterTitle>
        <ShadowContainer>
          <FormField
            type="text"
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
            type="text"
            label="Category"
            id="category"
            name="category"
            value={formValues.category}
            onChange={handleInputChange}
          />
          <FormField
            type="text"
            label="Description"
            id="description"
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
          />

          <FileFormField
            type="file"
            label="Choose a file..."
            id="image"
            name="image"
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
