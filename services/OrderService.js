import { productService } from "../routes/products.js";

export class OrderService {
  constructor(repository) {
    this.repository = repository;
  }

  async getOrders(sortValue) {
    return "asc" === sortValue
      ? await this.repository.getItemsAsc()
      : await this.repository.getItemsDesc();
  }

  async createOrder(productId, user, status) {
    const products = productId;
    let sum = 0;
    for (let i in products) {
      let item = await productService.repository.getItemById(products[i]);
      sum += item.data.price;
    }
    const order = {
      product: productId,
      user: user,
      price: sum,
      quantity: productId.length,
      status: status,
    };

    const isProductExist = await productService.repository.getItemById(
      productId
    );

    if (isProductExist.data != null) {
      return await this.repository.createItem(order);
    }
  }
  async getOrderById(id) {
    return await this.repository.getItemById(id);
  }
  async deleteOrder(id) {
    return await this.repository.deleteItem(id);
  }
  async updateOrder(id, body) {
    return await this.repository.updateItem(id, body);
  }
}
