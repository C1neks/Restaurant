export class ProductService {
  constructor(repository, productRatingService, categoryService) {
    this.repository = repository;
    this.productRatingService = productRatingService;
    this.categoryService = categoryService;
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
    console.log("PRODUCT TO CREATE", product);
    const createdProduct = await this.repository.createItem(product);

    const allCategories = await this.categoryService.getCategories();
    const wantedCategory = allCategories.data.filter(
      (isExists) => isExists.name === category
    )[0];

    await this.categoryService.updateCategory(
      wantedCategory._id,
      wantedCategory
    );
    return createdProduct;
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
    const isCategoryExists = await this.categoryService.getCategories();

    if (
      isCategoryExists.data.some((isExists) => isExists.name === category) ===
      false
    ) {
      const a = await this.categoryService.createCategory(category);

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

      const categories = await this.categoryService.getCategories();

      const categoryOfProduct = categories.data.find(
        (category) => category.name === categoryToUpdate
      );
      const deletedProduct = await this.repository.deleteItem(productId);
      await this.categoryService.updateCategory(
        categoryOfProduct._id.toString(),
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
}
