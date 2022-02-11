import { uuid } from "uuidv4";
import { ProductService } from "./ProductService";

jest.mock("uuid", () => ({ v4: () => "00000000-0000-0000-0000-000000000000" }));

describe("first test", () => {
  it("getProducts() on New ProductService instance should return empty array of items", () => {
    const productService = new ProductService();
    const products = productService.getProducts();
    const a = uuid();
    console.log(a);
    expect(products).toEqual([]);
  });

  it("createProducts()  should return  array of items", () => {
    const productService = new ProductService();
    const products = productService.createProduct(
      "rosol",
      13,
      "zupa z kury",
      uuid()
    );
    console.log("Produkty:", products);
    expect(products).toEqual([
      {
        name: "rosol",
        price: 13,
        description: "zupa z kury",
        id: uuid(),
      },
    ]);
  });
  it("deleteProduct() should return delete item from array of items", () => {
    const productService = new ProductService();
    const products = productService.createProduct(
      "rosol",
      13,
      "zupa z kury",
      uuid()
    );

    const a = productService.deleteProduct(uuid());

    expect(a).toEqual([]);
  });
  it("getProductById() should return  item with given id", () => {
    const productService = new ProductService();
    const products = productService.createProduct(
      "rosol",
      13,
      "zupa z kury",
      uuid()
    );

    const a = productService.getProductById(uuid());

    expect(a).toEqual({
      description: "zupa z kury",
      id: uuid(),
      name: "rosol",
      price: 13,
    });
  });
  it("updateProduct() should update item by given id", () => {
    const productService = new ProductService();
    const products = productService.createProduct(
      "rosol",
      13,
      "zupa z kury",
      uuid()
    );

    const a = productService.updateProduct(uuid(), { price: 78 });

    expect(a).toEqual([
      {
        description: "zupa z kury",
        id: uuid(),
        name: "rosol",
        price: 78,
      },
    ]);
  });
});
