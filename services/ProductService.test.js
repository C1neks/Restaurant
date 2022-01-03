import { ProductService } from "./ProductService";
import { uuid } from "uuidv4";

describe("first test", () => {
  it("getProducts() on New ProductService instance should return empty array of items", () => {
    const productService = new ProductService();
    const products = productService.getProducts();
    expect(products).toEqual([]);
  });

  it("createProducts()  should return  array of items", () => {
    const productService = new ProductService();
    const products = productService.createProduct(
      "rosol",
      13,
      "zupa z kury",
      "5555"
    );
    console.log("Produkty:", products);
    expect(products).toEqual([
      {
        name: "rosol",
        price: 13,
        description: "zupa z kury",
        id: "5555",
      },
    ]);
  });
  it("deleteProduct() should return delete item from array of items", () => {
    const productService = new ProductService();
    const products = productService.createProduct(
      "rosol",
      13,
      "zupa z kury",
      "5555"
    );

    const a = productService.deleteProduct("5555");

    expect(a).toEqual([]);
  });
  it("getProductById() should return  item with given id", () => {
    const productService = new ProductService();
    const products = productService.createProduct(
      "rosol",
      13,
      "zupa z kury",
      "5555"
    );

    const a = productService.getProductById("5555");

    expect(a).toEqual({
      description: "zupa z kury",
      id: "5555",
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
      "5555"
    );

    const a = productService.updateProduct("5555", { price: 78 });

    expect(a).toEqual([
      {
        description: "zupa z kury",
        id: "5555",
        name: "rosol",
        price: 78,
      },
    ]);
  });
});
