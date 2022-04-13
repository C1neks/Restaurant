import { categoryService } from "../routes/categories.js";

export class ProductService {
  constructor(repository, productRatingService) {
    this.repository = repository;
    this.productRatingService = productRatingService;
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
    const createdProduct = await this.repository.createItem(product);

    const allCategories = await categoryService.getCategories();
    const wantedCategory = allCategories.data.filter(
      (isExists) => isExists.name === category
    )[0];

    await categoryService.updateCategory(wantedCategory._id, wantedCategory);
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

      const categoryOfProduct = getCategory.data.find(
        (product) => product.name === categoryToUpdate
      );
      const deletedProduct = await this.repository.deleteItem(productId);
      await categoryService.updateCategory(categoryOfProduct._id.toString(), {
        name: categoryToUpdate,
      });
      return deletedProduct;
    } else {
      return await this.repository.deleteItem(productId);
    }
  }

  async updateProduct(productId, body) {
    return await this.repository.updateItem(productId, body, null);
  }

  async updateRating(productId, body) {
    const product = await this.getProductById(productId);

    const allCategories = await categoryService.getCategories();

    const categoryOfProduct = allCategories.data.find(
      (category) => category.name === product.data.category
    );

    const inc = { rating: body.rating, numberOfRates: body.numberOfRates };
    const user = body.usersVoted;

    const updatedRating =
      await this.productRatingService.ratingUpdateAndSaveVotes(
        productId,
        inc,
        user
      );
    await categoryService.updateCategory(categoryOfProduct._id.toString(), {
      name: product.data.category,
    });

    return updatedRating;
  }
}
