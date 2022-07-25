export class CategoryService {
  constructor(repository, productService) {
    this.repository = repository;
    this.productService = productService;
  }

  async getCategories() {
    return await this.repository.getItems();
  }

  async addProductsToCategory(name) {
    const exisitngProducts = await this.productService.getProducts();
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

  async updateCategory(id, body) {
    const exisitngProducts = await this.productService.getProducts();

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
