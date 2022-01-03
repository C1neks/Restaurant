import { uuid } from "uuidv4";
export class ProductModel {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

export class ProductService {
  constructor() {
    this.items = [];
  }
  getProducts() {
    return this.items;
  }
  createProduct(name, price, description) {
    if (Array.isArray(this.items)) {
      let newProduct = new ProductModel(name, price, description);
      newProduct = { ...newProduct, id: "5555" };
      this.items = [...this.items, newProduct];
    }
    console.log(this.items);
    return this.items;
  }
  getProductById(productId) {
    const id = productId;

    return this.items.find((product) => product.id === id);
  }
  deleteProduct(productId) {
    const id = productId;

    this.items = this.items.filter((product) => product.id !== id);

    return this.items;
  }
  updateProduct(productId, body) {
    const id = productId;
    const { name, price, description } = body;

    const updatedProduct = this.items.find((product) => product.id === id);

    if (name) updatedProduct.name = name;

    if (price) updatedProduct.price = price;

    if (description) updatedProduct.description = description;

    // return `Product with id ${id} updated!`;
    return this.items;
  }
}

// const product = new ProductService();
// const product2 = new ProductService();
// product.createProduct(5, "haha");
// product2.createProduct(20, "bbbb");
// product.getProduct();
// product2.getProduct();
// let products = [];
// export class ProductService {
//   constructor() {}
//
//   getProducts() {
//     return products;
//   }
//
//   createProduct(body) {
//     products.push({ ...body, id: uuid() });
//
//     return products;
//   }
//
//   getProductById(productId) {
//     const id = productId;
//
//     return products.find((product) => product.id === id);
//   }
//   //
//   deleteProduct(productId) {
//     const id = productId;
//
//     products = products.filter((product) => product.id !== id);
//
//     return products;
//   }
//
//   updateProduct(productId, body) {
//     const id = productId;
//     const { name, price, description } = body;
//
//     const updatedProduct = products.find((product) => product.id === id);
//
//     if (name) updatedProduct.name = name;
//
//     if (price) updatedProduct.price = price;
//
//     if (description) updatedProduct.description = description;
//
//     return `Product with id ${id} updated!`;
//   }
// }
