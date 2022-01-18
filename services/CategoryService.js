import { categoryService } from "../routes/categories.js";

export class CategoryService {
  constructor(repository) {
    this.repository = repository;
  }

  async getCategories() {
    return await this.repository.getItems();
  }

  async createCategory(name) {
    const category = {
      name: name,
    };

    return await this.repository.createItem(category);
  }
  async getCategoryById(id) {
    return await this.repository.getItemById(id);
  }
  async deleteCategory(id) {
    return await this.repository.deleteItem(id);
  }
  async updateCategory(id, body) {
    return await this.repository.updateItem(id, body);
  }
}
