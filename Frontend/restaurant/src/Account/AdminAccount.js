import React, { useState, useEffect } from "react";
import { Button } from "../StyledComponents/Button";
import axios from "axios";
import { Container } from "../FormField/AddProductForm.styles";
import { orderService } from "../services/services";
import {
  AdminOrdersContainer,
  EditOrderContainer,
  Status,
} from "./Account.styles";
import { MdDoneOutline } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { MainFooter, MainSubTitle } from "../Main/Main.styles";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTripadvisor,
} from "react-icons/fa";
import { IconContext } from "react-icons";
const AdminAccount = ({ orders, getOrders }) => {
  const [status, setStatus] = useState("done");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleEditStatus = (id) => {
    const body = {
      status: status,
    };
    editOrderStatus(id, body);
  };

  const editOrderStatus = async (id, body) => {
    await orderService.updateOrder(id, body);
    getOrders();
  };

  return (
    <Container>
      <MainSubTitle adminAccount>Orders</MainSubTitle>
      {orders.length === 0 ? (
        <Button onClick={() => getOrders()}>Show Orders</Button>
      ) : null}

      {orders.map((order) => (
        <AdminOrdersContainer key={order._id}>
          <h3>
            <h3>
              Order Number <h5>{order._id}</h5>
            </h3>
            <h3>Ordered Items</h3>
            <div>
              {order.items.map((product) => (
                <div key={product.productId}>
                  <p>{product.productName}</p>
                </div>
              ))}
              <EditOrderContainer>
                <h3>Status</h3>
                <Status>
                  {order.status}
                  {order.status === "done" ? (
                    <MdDoneOutline color={"green"} />
                  ) : (
                    <GrInProgress color={"red"} />
                  )}
                </Status>
              </EditOrderContainer>
              <EditOrderContainer>
                <p>Total Price</p>
                <p>{order.subTotal}</p>
              </EditOrderContainer>

              <EditOrderContainer>
                <select key={order._id} value={status} onChange={handleChange}>
                  <option value="inprocessing">inprocessing</option>
                  <option value="done">done</option>
                </select>
                <Button
                  editAddButton
                  onClick={() => handleEditStatus(order._id)}
                >
                  Edit
                </Button>
              </EditOrderContainer>
            </div>
          </h3>
        </AdminOrdersContainer>
      ))}
      <IconContext.Provider value={{ color: "black", size: 35 }}>
        <MainFooter>
          <a href="https://www.facebook.com/">
            <FaFacebookSquare style={{ margin: "1rem" }} />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagramSquare style={{ margin: "1rem" }} />
          </a>
          <a href="https://www.tripadvisor.com/">
            <FaTripadvisor style={{ margin: "1rem" }} />
          </a>
          <p>Copyright © 2021-2022 by Smakosz.</p>
        </MainFooter>
      </IconContext.Provider>
    </Container>
  );
};

export default AdminAccount;
