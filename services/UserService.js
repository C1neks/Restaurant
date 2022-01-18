import { userService } from "../routes/users.js";

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
    return await this.repository.getItemById(id);
  }
  async deleteUser(userId) {
    return await this.repository.deleteItem(userId);
  }
  async updateUser(userId, body) {
    return await this.repository.updateItem(userId, body);
  }
}
