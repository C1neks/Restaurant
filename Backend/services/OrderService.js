import { productService } from "../routes/products.js";

export class OrderService {
  constructor(repository) {
    this.repository = repository;
  }

  async getOrders(sortValue) {
    return this.repository.getItemsSorted(sortValue);
  }

  async createOrder(items, user, amountOfOrders) {
    let cartItems = [];
    let subTotal = 0;
    for (let item of items) {
      const dbItem = await productService.repository.getItemById(
        item.productId
      );

      try {
        const total = dbItem.data.price * item.quantity;
        subTotal += total;
        cartItems = [
          ...cartItems,
          {
            productId: item.productId,
            total,
            price: dbItem.data.price,
            quantity: item.quantity,
          },
        ];
      } catch (error) {
        return error;
      }
    }
    if (amountOfOrders > 5) {
      const order = {
        items: cartItems,
        subTotal: subTotal * 0.9,
        user,
      };
      return await this.repository.createItem(order);
    } else {
      const order = {
        items: cartItems,
        subTotal,
        user,
      };
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
