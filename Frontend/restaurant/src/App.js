import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { useHistory } from "react-router-dom";

import Menu from "./Menu/Menu";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Main from "./Main/Main";
import Form from "./FormField/Form";
import axios from "axios";
import Basket from "./Basket/Basket";
import Checkout from "./Checkout/Checkout";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Account from "./Account/Account";

const initialFormState = {
  name: "",
  price: "",
  category: "",
  description: "",
};

const initialUserFormState = {
  name: "",
  email: "",
  password: "",
};
const initialLoginFormState = {
  name: "",
  password: "",
};

export const ItemsContext = React.createContext({
  cartItems: [],
  totalPrice: 0,
  onAddToCart: () => {},
  onRemoveFromCart: () => {},
});

function App() {
  const addProductToDB = (a) => {
    axios.post("http://localhost:4000/products", a).then((response) => {
      console.log(response.data.data);
    });
  };

  const addUserToDB = (a) => {
    axios.post("http://localhost:4000/users", a).then((response) => {
      console.log(response.data.data);
    });
  };
  const [loginValues, setLoginValues] = useState(initialLoginFormState);
  const handleLoginInputChange = (e) => {
    console.log(loginValues);
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    const UserToLogin = {
      name: loginValues.name,
      password: loginValues.password,
    };
    loginUser(UserToLogin);
    setLoginValues(initialLoginFormState);
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    window.location.reload();
  };

  const [userDetails, setUserDetails] = useState([]);
  const getUserDetails = () => {
    const token = localStorage.getItem("userInfo");
    axios
      .get("http://localhost:4000/users", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        const details = response.data;
        console.log(details);
        setUserDetails(details);
      });
  };
  useEffect(() => getUserDetails(), []);

  const loginUser = (a) => {
    axios.post("http://localhost:4000/users/login", a).then((response) => {
      console.log("RESPO:", response);
      localStorage.setItem("userInfo", response.data.accessToken);
      window.location.reload();
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
  const [cartItems, setCartItems] = useState([]);
  const onAddToCart = (product) => {
    console.log(product);
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems((cartItems) =>
        cartItems.map((x) =>
          x === product ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const onRemoveFromCart = (product) => {
    const exist = cartItems.find((x) => x === product);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x !== product));
    } else {
      setCartItems((cartItems) =>
        cartItems.map((x) =>
          x === product ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };
  const [totalPrice, setTotalPrice] = useState([]);

  useEffect(
    () =>
      setTotalPrice(cartItems.reduce((a, c) => a + c.price * c.quantity, 0)),
    [cartItems]
  );

  const [formUserValues, setFormUserValues] = useState(initialUserFormState);

  const handleUserInputChange = (e) => {
    console.log(formUserValues);
    setFormUserValues({
      ...formUserValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formUserValues.name,
      email: formUserValues.email,
      password: formUserValues.password,
    };
    addUserToDB(newUser);
    setFormUserValues(initialUserFormState);
  };

  return (
    <Router>
      <GlobalStyles />
      <ItemsContext.Provider
        value={{ cartItems, totalPrice, onAddToCart, onRemoveFromCart }}
      >
        <Navbar
          countCartItems={cartItems.length}
          handleLogout={handleLogout}
          userDetails={userDetails}
        />

        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/menu">
            {localStorage.getItem("userInfo") ? (
              <>
                <Basket />
                <Menu userDetails={userDetails} />
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/admin">
            <Form
              formValues={formValues}
              handleAddProduct={handleAddProduct}
              handleInputChange={handleInputChange}
            />
          </Route>
          <Route path="/register">
            <Register
              formUserValues={formUserValues}
              handleUserInputChange={handleUserInputChange}
              handleAddUser={handleAddUser}
            />
          </Route>
          <Route path="/login">
            {localStorage.getItem("userInfo") ? (
              <Redirect to="/" />
            ) : (
              <Login
                loginValues={loginValues}
                handleLoginInputChange={handleLoginInputChange}
                handleLoginUser={handleLoginUser}
                userDetails={userDetails}
                handleLogout={handleLogout}
              />
            )}
          </Route>
          <Route path="/account">
            {localStorage.getItem("userInfo") ? (
              <Account userDetails={userDetails} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/checkout">
            <Checkout userDetails={userDetails} />
          </Route>
        </Switch>
      </ItemsContext.Provider>
    </Router>
  );
}

export default App;
