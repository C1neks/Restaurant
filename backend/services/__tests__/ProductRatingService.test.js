import { ProductRatingService } from "../ProductRatingService.js";
import { Repository } from "../../repository/repository.js";
import ProductRating from "../../models/productRatingModel.js";
import { categoryService } from "../../routes/categories.js";
import { productService } from "../../routes/products.js";

describe("ProductRatingService", () => {
  const productRatingService = new ProductRatingService(
    new Repository(ProductRating),
    categoryService,
    productService
  );

  it("should return empty array of ratings on new db", async () => {
    expect(await productRatingService.getProductsRatings()).toEqual({
      data: [],
      error: null,
    });
  });
  it("should create new rating if productRating with given id does not exist", async () => {
    expect((await productRatingService.getProductsRatings()).data).toHaveLength(
      0
    );
    await productRatingService.getProductRatingById("123456789123");

    expect((await productRatingService.getProductsRatings()).data).toHaveLength(
      1
    );
  });

  it("should update rating and save user  ", async () => {
    await categoryService.createCategory("pizza");
    const {
      data: { _id },
    } = await productService.createProduct(
      "pizza",
      28,
      "pizza",
      "very good pizza",
      "pizza.jpg"
    );
  });
});
