import { ENDPOINT_RESTAURANT } from "../constants";
import axios from "axios";

export const userService = {
  getDetails: (id) => axios.get(`${ENDPOINT_RESTAURANT}/users/${id}`),
  loginUser: (payload) =>
    axios.post(`${ENDPOINT_RESTAURANT}/users/login`, payload),
  registerUser: (payload) =>
    axios.post(`${ENDPOINT_RESTAURANT}/users`, payload),
};

export const orderService = {
  updateOrder: (id, payload) =>
    axios.patch(`${ENDPOINT_RESTAURANT}/orders/${id}`, payload),
  getOrders: () => axios.get(`${ENDPOINT_RESTAURANT}/orders?desc`),
  createOrder: (payload) =>
    axios.post(`${ENDPOINT_RESTAURANT}/orders`, payload),
};

export const productService = {
  addProduct: (payload) =>
    axios.post(`${ENDPOINT_RESTAURANT}/products`, payload),
  deleteProduct: (id) => axios.delete(`${ENDPOINT_RESTAURANT}/products/${id}`),
};

export const categoryService = {
  getAll: () => axios.get(`${ENDPOINT_RESTAURANT}/categories/`),
};

export const opinionService = {
  getRate: (id) => axios.get(`${ENDPOINT_RESTAURANT}/products/${id}`),
  addRating: (id, payload) =>
    axios.patch(`${ENDPOINT_RESTAURANT}/products/rating/${id}`, payload),
};
