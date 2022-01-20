import { userService } from "../routes/users.js";
import { orderService } from "../routes/orders.js";

export class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  async getUsers() {
    return await this.repository.getItems();
  }

  async createUser(name, email, password) {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    return await this.repository.createItem(user);
  }
  async getUserById(id) {
    const allOrders = await orderService.getOrders();

    const userOrders = allOrders.data.filter((order) => order.user === id);

    await this.updateUser(id, {}, userOrders);
    return await this.repository.getItemById(id);
  }
  async deleteUser(userId) {
    return await this.repository.deleteItem(userId);
  }
  async updateUser(userId, body, orders) {
    body.orders = orders;
    return await this.repository.updateItem(userId, body);
  }
}
