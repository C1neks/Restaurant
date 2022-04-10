import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../FormField/Form";
import AdminAccount from "../Account/AdminAccount";
import { orderService, productService } from "../services/services";

const AdminPage = ({ userDetails }) => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const result = await orderService.getOrders();

    setOrders(result.data.data);
  };

  return (
    <>
      <Form />
      <AdminAccount orders={orders} getOrders={getOrders} />
    </>
  );
};

export default AdminPage;
