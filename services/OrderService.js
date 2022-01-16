import { orderService } from "../routes/orders.js";
import { productService } from "../routes/products.js";

export class OrderService {
  constructor(repository) {
    this.repository = repository;
  }

  async getOrders() {
    return await orderService.repository.getItems();
  }

  async createOrder(productId, status) {
    const order = {
      product: productId,
      quantity: productId.length,
      status: status,
    };

    const isProductExist = await productService.repository.getItemById(
      productId
    );

    if (isProductExist.data != null) {
      return await orderService.repository.createItem(order);
    }
  }
  async getOrderById(id) {
    return await orderService.repository.getItemById(id);
  }
  async deleteOrder(id) {
    return await orderService.repository.deleteItem(id);
  }
  async updateOrder(id, body) {
    return await orderService.repository.updateItem(id, body);
  }
}
