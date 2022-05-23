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
    const isRatingExist = await this.repository.getItemById(id);
    isRatingExist.data === null
      ? await this.repository.createItem(productRating)
      : null;

    return await this.repository.getItemById(id);
  }
  async ratingUpdateAndSaveVotes(productId, inc, user) {
    const userVotedId = "usersWhoRated." + user;
    const userVoted = { [`${userVotedId}`]: true };

    const updatedRating = await this.repository.updateItem(
      productId,
      userVoted,
      inc
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

    const inc = { rating: body.rating, numberOfRatings: 1 };
    const user = body.voter;

    const updatedRating = await this.ratingUpdateAndSaveVotes(
      productId,
      inc,
      user
    );

    return updatedRating;
  }
}
