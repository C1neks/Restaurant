import { productService } from "../routes/products.js";

export class ProductRatingService {
  constructor(repository, categoryService) {
    this.repository = repository;
    this.categoryService = categoryService;
  }
  async getProductsRatings() {
    return await this.repository.getItems();
  }
  async getProductRatingById(id) {
    const productRating = {
      _id: id,
    };
    await this.repository.createItem(productRating);
    return await this.repository.getItemById(id);
  }
  async ratingUpdateAndSaveVotes(productId, inc, user) {
    const updatedRating = await this.repository.updateItem(
      productId,
      null,
      inc,
      user
    );

    return updatedRating;
  }
  async updateRating(productId, body) {
    const productRating = {
      _id: productId,
    };
    await this.repository.createItem(productRating);
    const product = await productService.getProductById(productId);

    const allCategories = await this.categoryService.getCategories();

    const categoryOfProduct = allCategories.data.find(
      (category) => category.name === product.data.category
    );

    const inc = { rating: body.rating, numberOfRates: 1 };
    const user = body.usersVoted;
    const userObj = {
      [user]: true,
    };

    const updatedRating = await this.ratingUpdateAndSaveVotes(
      productId,
      inc,
      userObj
    );
    await this.categoryService.updateCategory(
      categoryOfProduct._id.toString(),
      {
        name: product.data.category,
      }
    );

    return updatedRating;
  }
}
