import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

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
import axios from "axios";
import Basket from "./Basket/Basket";
import Checkout from "./Checkout/Checkout";
import Register from "./Register/Register";
import AdminPage from "./Admin/AdminPage";
import LoginPage from "./Login/LoginPage";
import AccountPage from "./Account/AccountPage";
import { userService } from "./services/services";

export const ItemsContext = React.createContext({
  cartItems: [],
  totalPrice: 0,
  onAddToCart: () => {},
  onRemoveFromCart: () => {},
  logged: null,
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userInfo");
    const auth = token ? `Bearer ${token}` : "";
    config.headers.common["Authorization"] = auth;
    return config;
  },
  (error) => Promise.reject(error)
);

function App() {
  const [logged, setLogged] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userID");
    window.location.reload();
  };

  const [userID, setUserID] = useState("");
  const isLogged = () => {
    const ID = localStorage.getItem("userID");
    const info = localStorage.getItem("userInfo");

    setLogged(info);

    // console.log(info);
    // console.log(logged);
    ID ? setUserID(ID) : setUserID(null);
  };
  useEffect(() => isLogged(), [userID]);

  const [userDetails, setUserDetails] = useState([]);

  const getUserDetails = (userID) => {
    userService.getDetails(userID).then((r) => {
      setUserDetails(r.data.data);
    });
  };
  useEffect(() => getUserDetails(userID), [userID]);

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

  return (
    <Router>
      <GlobalStyles />
      <ItemsContext.Provider
        value={{ cartItems, totalPrice, onAddToCart, onRemoveFromCart, logged }}
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
            {logged ? (
              cartItems.length !== 0 ? (
                <>
                  <Basket />
                  <Menu userDetails={userDetails} />
                </>
              ) : (
                <Menu userDetails={userDetails} />
              )
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/admin">
            {!userDetails.isAdmin ? (
              <div>You are not admin!</div>
            ) : (
              <>
                <AdminPage userDetails={userDetails} />
              </>
            )}
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <LoginPage userDetails={userDetails} handleLogout={handleLogout} />
          </Route>
          <Route path="/account">
            <AccountPage userDetails={userDetails} />
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
