import { ProductService } from "../ProductService.js";
import { Repository } from "../../repository/repository.js";
import Product from "../../models/productModel.js";
import { ProductRatingService } from "../ProductRatingService.js";
import ProductRating from "../../models/productRatingModel.js";
import { CategoryService } from "../CategoryService.js";
import Category from "../../models/categoryModel.js";

describe("ProductService", () => {
  const productRatingService = new ProductRatingService(
    new Repository(ProductRating),
    new CategoryService(new Repository(Category))
  );
  const categoryService = new CategoryService(
    new Repository(Category),
    new ProductService(new Repository(Product))
  );
  const productService = new ProductService(
    new Repository(Product),
    productRatingService,
    categoryService
  );

  const createTestProduct = () =>
    productService.createProduct(
      "pepperoni",
      38,
      "pizza",
      "Pizza pepperoni",
      "images/pizza.jpg"
    );

  it("should return empty array of products on new db", async () => {
    expect(await productService.getProducts()).toEqual({
      data: [],
      error: null,
    });
  });

  it("creating product should increase the number of products by 1 ", async () => {
    expect((await productService.getProducts()).data).toHaveLength(0);
    await createTestProduct();
    expect((await productService.getProducts()).data).toHaveLength(1);
  });

  it("should return undefined when product with a given id not found ", async () => {
    expect(
      (await productService.getProductById("123456789123")).data
    ).toBeNull();
  });

  it("should create product and return product by given id", async () => {
    const {
      data: { _id },
    } = await createTestProduct();
    expect((await productService.getProductById(_id)).data).toBeTruthy();
  });

  it("should delete product with given id", async () => {
    const {
      data: { _id },
    } = await createTestProduct();
    expect((await productService.getProductById(_id)).data).toBeTruthy();
    await productService.deleteProduct(_id);
    expect((await productService.getProductById(_id)).data).toBeNull();
  });
  it("should update product with given id", async () => {
    const {
      data: { _id },
    } = await createTestProduct();

    const body = {
      price: 99,
    };
    expect((await productService.updateProduct(_id, body)).data.price).toEqual(
      99
    );
  });
});
