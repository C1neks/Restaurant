import React, { useEffect, useState } from "react";
import axios from "axios";
import AddProductForm from "../FormField/AddProductForm";
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
      <AddProductForm />
      <AdminAccount orders={orders} getOrders={getOrders} />
    </>
  );
};

export default AdminPage;
