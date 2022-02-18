import { productService } from "../routes/products.js";

export class CategoryService {
  constructor(repository) {
    this.repository = repository;
  }

  async getCategories() {
    const a = await this.repository.getItems();

    a.data.map((category) => {
      let id = category._id;
      let name = category.name;
      this.repository.updateItem(id, name);
    });
    const b = await this.repository.getItems();
    return b;
  }

  async addProductsToCategory(name) {
    const exisitngProducts = await productService.getProducts();
    let products = [];

    products = exisitngProducts.data.filter(
      (product) => product.category === name
    );

    return products;
  }

  async createCategory(name) {
    const products = await this.addProductsToCategory(name);

    const category = {
      name: name,
      products: products,
    };

    return await this.repository.createItem(category);
  }
  async getCategoryById(id) {
    return await this.repository.getItemById(id);
  }
  async deleteCategory(id) {
    return await this.repository.deleteItem(id);
  }
  // async updateCategoryAfterRates(id, body) {
  //   return await this.repository.updateItem(id, body);
  // }
  async updateCategory(id, body) {
    if (body.products) {
      await this.addProductsToCategory(body.name);
      return await this.repository.updateItem(id, body);
    }

    return await this.repository.updateItem(id, body);
  }
}
