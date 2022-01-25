import { userService } from "../routes/users.js";
import { orderService } from "../routes/orders.js";

export class UserService {
  constructor(repository) {
    this.repository = repository;
  }
  async refreshUsers() {
    const users = await this.repository.getItems();
    for (let i in users.data) {
      let user = users.data[i];
      await this.getUserById(user._id.toString());
    }
  }
  async getUsers() {
    await this.refreshUsers();
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

    const userOrders = allOrders.data.filter(
      (order) => order.user.toString() === id
    );

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
