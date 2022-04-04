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

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      name: formValues.name,
      price: formValues.price,
      category: formValues.category,
      description: formValues.description,
    };
    addProductToDB(newProduct);
    setFormValues(initialFormState);
  };

  return (
    <>
      <Form
        formValues={formValues}
        handleAddProduct={handleAddProduct}
        handleInputChange={handleInputChange}
      />
      <AdminAccount orders={orders} getOrders={getOrders} />
    </>
  );
};

export default AdminPage;
