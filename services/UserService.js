import { Repository } from "../repository/repository.js";

import User from "../models/userModel.js";

export class UserService {
  constructor() {}

  async getUsers() {
    const Items = new Repository(User);

    return await Items.getItems();
  }

  async createUser(name, password) {
    const user = {
      name: name,
      password: password,
    };
    const newitem = new Repository(User);
    await newitem.createItem(user);
  }
  async getUserById(id) {
    const newitem = new Repository(User);

    return await newitem.getItemById(id);
  }
  async deleteUser(userId) {
    const repository = new Repository(User);
    return await repository.deleteItem(userId);
  }
  async updateUser(userId, body) {
    const id = userId;
    const { name, password } = body;
    const repository = new Repository(User);
    const updatedProduct = await this.getUserById(id);

    if (name) updatedProduct.name = name;

    if (password) updatedProduct.password = password;

    return await repository.updateItem(updatedProduct);
  }
}
