import { productService } from "../routes/products.js";

export class ProductService {
  constructor(repository) {
    this.repository = repository;
  }
  async getProducts() {
    return await productService.repository.getItems();
  }
  async createProduct(name, price, description) {
    const product = {
      name: name,
      price: price,
      description: description,
    };

    return await productService.repository.createItem(product);
  }
  async getProductById(id) {
    return await productService.repository.getItemById(id);
  }
  async deleteProduct(productId) {
    return await productService.repository.deleteItem(productId);
  }

  async updateProduct(productId, body) {
    return await productService.repository.updateItem(productId, body);
  }
}
