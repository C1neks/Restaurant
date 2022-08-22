import React, { useState } from "react";

import AddProductForm from "../FormField/AddProductForm";
import AdminAccount from "../Account/AdminAccount";
import { orderService } from "../services/services";
import { Order } from "../models/models";

const AdminPage: React.FC = () => {
  const [orders, setOrders] = useState<Array<Order>>([]);

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
