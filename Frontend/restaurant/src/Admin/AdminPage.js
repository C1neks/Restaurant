import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../FormField/Form";
import AdminAccount from "../Account/AdminAccount";
import { orderService, productService } from "../services/services";

const initialFormState = {
  name: "",
  price: "",
  category: "",
  description: "",
};
const AdminPage = ({ userDetails }) => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const result = await orderService.getOrders();

    setOrders(result.data.data);
  };

  const addProductToDB = async (a) => {
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

  const handleAddProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("price", formValues.price);
    formData.append("category", formValues.category);
    formData.append("description", formValues.description);
    formData.append("image", file);

    addProductToDB(formData);
    setFormValues(initialFormState);
  };

  return (
    <>
      <Form
        formValues={formValues}
        file={file}
        handleAddProduct={handleAddProduct}
        handleInputChange={handleInputChange}
        handleFile={handleFile}
      />
      <AdminAccount orders={orders} getOrders={getOrders} />
    </>
  );
};

export default AdminPage;
