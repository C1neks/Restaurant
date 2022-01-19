import { productService } from "../routes/products.js";
import { categoryService } from "../routes/categories.js";

export class ProductService {
  constructor(repository) {
    this.repository = repository;
  }
  async getProducts() {
    return await this.repository.getItems();
  }
  async createProductHelper(name, price, category, description) {
    const product = {
      name: name,
      price: price,
      category: category,
      description: description,
    };
    const updatedProduct = await this.repository.createItem(product);

    const isCategoryExists = await categoryService.getCategories();
    const a = isCategoryExists.data.filter(
      (isExists) => isExists.name === category
    )[0];

    await categoryService.updateCategory(a._id, a);
    return updatedProduct;
  }
  async createProduct(name, price, category, description) {
    const isCategoryExists = await categoryService.getCategories();

    if (
      isCategoryExists.data.some((isExists) => isExists.name === category) ===
      false
    ) {
      const a = await categoryService.createCategory(category);

      return await this.createProductHelper(name, price, category, description);
    } else {
      return await this.createProductHelper(name, price, category, description);
    }
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
