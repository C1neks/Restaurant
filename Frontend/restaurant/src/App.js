import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles, { Container } from "./GlobalStyles";
import Menu from "./Menu/Menu";
import { Wrapper } from "./Menu/Menu.styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Main from "./Main/Main";
import Form from "./FormField/Form";
import axios from "axios";

const initialFormState = {
  name: "",
  price: "",
  category: "",
  description: "",
};

function App() {
  const addProductToDB = (a) => {
    axios.post("http://localhost:4000/products", a).then((response) => {
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
    <Router>
      <GlobalStyles />
      <Navbar />

      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/addProducts">
          <Form
            formValues={formValues}
            handleAddProduct={handleAddProduct}
            handleInputChange={handleInputChange}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
