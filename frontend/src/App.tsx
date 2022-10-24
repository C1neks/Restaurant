import React, { useEffect, useState } from "react";

import GlobalStyles from "./GlobalStyles";

import Menu from "./Menu/Menu";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Main from "./Main/Main";
import axios, { AxiosRequestConfig } from "axios";

import Checkout from "./Checkout/Checkout";
import Register from "./Register/Register";
import AdminPage from "./Admin/AdminPage";
import LoginPage from "./Login/LoginPage";
import AccountPage from "./Account/AccountPage";
import { userService } from "./services/services";
import Product from "./Product/Product";
import {
  ItemsContextType,
  LoggedContextType,
  ProductType,
  UserDetails,
} from "./models/models";

export const ItemsContext = React.createContext<ItemsContextType>({
  cartItems: [],
  totalPrice: 0,
  onAddToCart: (item: ProductType) => {},
  onRemoveFromCart: (item: ProductType) => {},
});

export const LoggedContext = React.createContext<LoggedContextType>({
  logged: null,
});

interface MyAxiosRequestConfig extends Omit<AxiosRequestConfig, "headers"> {
  headers?: any; // this was "any" at v0.21.1 but now broken between 0.21.4 >= 0.27.2
  // Lets make it any again to make it work again.
}

axios.interceptors.request.use(
  (config: MyAxiosRequestConfig) => {
    const token = localStorage.getItem("userInfo");
    const auth = token ? `Bearer ${token}` : "";

    config.headers.common["Authorization"] = auth;
    return config;
  },
  (error) => Promise.reject(error)
);

const App: React.FC = () => {
  const [logged, setLogged] = useState<string | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userID");
    window.location.reload();
  };

  const [userID, setUserID] = useState<string | null>("");
  const isLogged = () => {
    const ID = localStorage.getItem("userID");
    const info = localStorage.getItem("userInfo");

    setLogged(info);

    ID ? setUserID(ID) : setUserID(null);
  };
  useEffect(() => isLogged(), [userID]);

  const [userDetails, setUserDetails] = useState<UserDetails>({
    _id: 0,
    name: "",
    email: "",
    isAdmin: false,
    password: "",
    orders: [],
  });

  const getUserDetails = async (userID: string | null) => {
    const r = await userService.getDetails(userID);
    setUserDetails(r.data.data);
  };

  useEffect(() => {
    (async () => {
      await getUserDetails(userID);
    })();
  }, [userID]);

  const [cartItems, setCartItems] = useState<Array<ProductType>>([]);
  const onAddToCart = (product: ProductType) => {
    const exist = cartItems.find((x: ProductType) => x._id === product._id);
    if (exist) {
      setCartItems((cartItems) =>
        cartItems.map((x) =>
          x._id === product._id ? { ...x, quantity: x.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const onRemoveFromCart = (product: ProductType) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist?.quantity === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems((cartItems) =>
        cartItems.map((x) =>
          x._id === product._id ? { ...x, quantity: x.quantity - 1 } : x
        )
      );
    }
  };
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(
    () =>
      setTotalPrice(cartItems.reduce((a, c) => a + c.price * c.quantity, 0)),
    [cartItems]
  );
  const [cat, setCat] = useState(" Default Value ");
  return (
    <Router>
      <GlobalStyles />
      <ItemsContext.Provider
        value={{ cartItems, totalPrice, onAddToCart, onRemoveFromCart }}
      >
        <LoggedContext.Provider value={{ logged }}>
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
              {logged ? <Menu setCat={setCat} /> : <Redirect to="/login" />}
            </Route>
            {userDetails.isAdmin && (
              <Route path="/admin">
                <AdminPage />
              </Route>
            )}
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/account">
              <AccountPage
                userDetails={userDetails}
                getUserDetails={getUserDetails}
              />
            </Route>
            <Route path="/checkout">
              {cartItems.length === 0 ? (
                <Redirect to="/menu" />
              ) : (
                <Checkout
                  userDetails={userDetails}
                  getUserDetails={getUserDetails}
                  setCartItems={setCartItems}
                />
              )}
            </Route>
            <Route path="/category">
              <Product cat={cat} userDetails={userDetails} />
            </Route>
          </Switch>
        </LoggedContext.Provider>
      </ItemsContext.Provider>
    </Router>
  );
};

export default App;
