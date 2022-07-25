import { CategoryService } from "../CategoryService.js";
import { Repository } from "../../repository/repository.js";
import Category from "../../models/categoryModel.js";
import { productService } from "../../routes/products.js";

describe("CategoryService", () => {
  const categoryService = new CategoryService(
    new Repository(Category),
    productService
  );

  const createTestCategory = () =>
    categoryService.createCategory("testCategory");

  it("should return empty array of categories on new db", async () => {
    expect(await categoryService.getCategories()).toEqual({
      data: [],
      error: null,
    });
  });

  it("creating category should increase number of categories by 1", async () => {
    expect((await categoryService.getCategories()).data).toHaveLength(0);
    await createTestCategory();
    expect((await categoryService.getCategories()).data).toHaveLength(1);
  });

  it("should return undefined when category with given id not found", async () => {
    expect(
      (await categoryService.getCategoryById("123456789123")).data
    ).toBeNull();
  });

  it("should create category and return category by id ", async () => {
    const {
      data: { _id },
    } = await createTestCategory();
    expect((await categoryService.getCategoryById(_id)).data).toBeTruthy();
  });

  it("should delete category with given id and decrease number of categories by 1 ", async () => {
    const {
      data: { _id },
    } = await createTestCategory();

    expect((await categoryService.getCategories()).data).toHaveLength(1);
    await categoryService.deleteCategory(_id);
    expect((await categoryService.getCategories()).data).toHaveLength(0);
  });

  it("should update category with given id", async () => {
    const {
      data: { _id },
    } = await createTestCategory();

    const body = {
      name: "updatedTestCategory",
    };

    expect((await categoryService.updateCategory(_id, body)).data.name).toEqual(
      "updatedTestCategory"
    );
  });
});
