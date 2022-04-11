import { categoryService } from "../routes/categories.js";

export class ProductService {
  constructor(repository) {
    this.repository = repository;
  }
  async getProducts() {
    return await this.repository.getItems();
  }
  async createProductHelper(
    name,
    price,
    category,
    description,
    image,
    rating,
    numberOfRates
  ) {
    const product = {
      name: name,
      price: price,
      category: category,
      description: description,
      image: image,
      rating: rating,
      numberOfRates: numberOfRates,
    };
    const updatedProduct = await this.repository.createItem(product);

    const allCategories = await categoryService.getCategories();
    const wantedCategory = allCategories.data.filter(
      (isExists) => isExists.name === category
    )[0];

    await categoryService.updateCategory(wantedCategory._id, wantedCategory);
    return updatedProduct;
  }
  async createProduct(
    name,
    price,
    category,
    description,
    image,
    rating,
    numberOfRates
  ) {
    const isCategoryExists = await categoryService.getCategories();

    if (
      isCategoryExists.data.some((isExists) => isExists.name === category) ===
      false
    ) {
      const a = await categoryService.createCategory(category);

      return await this.createProductHelper(
        name,
        price,
        category,
        description,
        image,
        rating,
        numberOfRates
      );
    } else {
      return await this.createProductHelper(
        name,
        price,
        category,
        description,
        image,
        rating,
        numberOfRates
      );
    }
  }
  async getProductById(id) {
    return await this.repository.getItemById(id);
  }
  async deleteProduct(productId) {
    const productToDelete = await this.getProductById(productId);

    if (productToDelete.data != null) {
      const categoryToUpdate = productToDelete.data.category;

      const getCategory = await categoryService.getCategories();

      const idOfCategoryOfProduct = getCategory.data.filter(
        (product) => product.name === categoryToUpdate
      )[0];
      const deletedProduct = await this.repository.deleteItem(productId);
      await categoryService.updateCategory(
        idOfCategoryOfProduct._id.toString(),
        {
          name: categoryToUpdate,
        }
      );
      return deletedProduct;
    } else {
      return await this.repository.deleteItem(productId);
    }
  }

  async updateProduct(productId, body) {
    return await this.repository.updateItem(productId, body, null);
  }

  async updateRating(productId, body) {
    const inc = { rating: body.rating, numberOfRates: body.numberOfRates };
    return await this.repository.updateItem(productId, null, inc);
  }
}
