import { productService } from "../routes/products.js";

export class ProductService {
  constructor(repository) {
    this.repository = repository;
  }
  async getProducts() {
    return await this.repository.getItems();
  }
  async createProduct(name, price, description) {
    const product = {
      name: name,
      price: price,
      description: description,
    };

    return await this.repository.createItem(product);
  }
  async getProductById(id) {
    return await this.repository.getItemById(id);
  }
  async deleteProduct(productId) {
    return await this.repository.deleteItem(productId);
  }

  async updateProduct(productId, body) {
    return await this.repository.updateItem(productId, body);
  }
}
