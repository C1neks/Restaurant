import { productService } from "../routes/products.js";
import { categoryService } from "../routes/categories.js";

export class CategoryService {
  constructor(repository) {
    this.repository = repository;
  }

  async getCategories() {
    return await this.repository.getItems();
  }

  async addProductsToCategory(name) {
    const exisitngProducts = await productService.getProducts();
    console.log(exisitngProducts);
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
    // await this.addProductsToCategory(body.name)
    const exisitngProducts = await productService.getProducts();

    let products = [];
    products = exisitngProducts.data.filter(
      (product) => product.category === body.name
    );

    const category = {
      name: body.name,
      products,
    };

    return await this.repository.updateItem(id, category);
  }
}
