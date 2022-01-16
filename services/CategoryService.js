import { categoryService } from "../routes/categories.js";

export class CategoryService {
  constructor(repository) {
    this.repository = repository;
  }

  async getCategories() {
    return await categoryService.repository.getItems();
  }

  async createCategory(name) {
    const category = {
      name: name,
    };

    return await categoryService.repository.createItem(category);
  }
  async getCategoryById(id) {
    return await categoryService.repository.getItemById(id);
  }
  async deleteCategory(id) {
    return await categoryService.repository.deleteItem(id);
  }
  async updateCategory(id, body) {
    return await categoryService.repository.updateItem(id, body);
  }
}
