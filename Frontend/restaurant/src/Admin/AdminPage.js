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
  const [Orders, setOrders] = useState([]);

  const getOrders = () => {
    return orderService.getOrders().then((response) => {
      return response.data.data;
    });
  };
  useEffect(() => {
    (async () => {
      const result = await getOrders();

      setOrders(result);
    })();
  }, []);

  const addProductToDB = (a) => {
    productService.addProduct(a).then((response) => {
      console.log(response.data.data);
    });
  };
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    console.log(formValues);
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
      <AdminAccount Orders={Orders} getOrders={getOrders} />
    </>
  );
};

export default AdminPage;
