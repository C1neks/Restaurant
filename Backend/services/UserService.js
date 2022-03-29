import { userService } from "../routes/users.js";
import { orderService } from "../routes/orders.js";
import bcrypt from "bcrypt";

export class UserService {
  constructor(repository) {
    this.repository = repository;
  }
  // async refreshUsers() {
  //   const users = await this.repository.getItems();
  //   for (let i in users.data) {
  //     let user = users.data[i];
  //     await this.getUserById(user._id.toString());
  //   }
  // }
  async getUsers() {
    // await this.refreshUsers();
    return await this.repository.getItems();
  }

  async checkUser(name, password) {
    const users = await this.repository.getItems();
    const user = users.data.find((user) => user.name === name);
    console.log(user);

    try {
      if (user && (await bcrypt.compare(password, user.password))) {
        return { user, error: null };
      } else {
        return { user: null, error: "Provided username or password is wrong" };
      }
    } catch {
      return "Something went wrong!";
    }
  }

  async createUser(name, email, isAdmin, password) {
    const user = {
      name: name,
      email: email,
      isAdmin: false,
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
