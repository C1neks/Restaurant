import { userService } from "../routes/users.js";

export class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  async getUsers() {
    return await userService.repository.getItems();
  }

  async createUser(name, password) {
    const user = {
      name: name,
      password: password,
    };

    return await userService.repository.createItem(user);
  }
  async getUserById(id) {
    return await userService.repository.getItemById(id);
  }
  async deleteUser(userId) {
    return await userService.repository.deleteItem(userId);
  }
  async updateUser(userId, body) {
    return await userService.repository.updateItem(userId, body);
  }
}
