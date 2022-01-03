import { uuid } from "uuidv4";
import Product from "../models/productModel.js";
export class ProductModel {
  constructor(name, price, description, id) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.id = id;
  }
}

export class ProductService {
  constructor() {
    this.items = [];
  }
  async getProducts() {
    try {
      const products = await Product.find();

      return products;
    } catch (error) {
      return error.message;
    }
  }
  async createProduct(name, price, description) {
    const post = {
      name: name,
      price: price,
      description: description,
    };
    const newProduct = new Product(post);
    try {
      await newProduct.save();
      return "Produkt został dodany!";
    } catch (error) {
      return error.message;
    }
    // if (Array.isArray(this.items)) {
    //   let newProduct = new ProductModel(name, price, description);
    //   newProduct = { ...newProduct, id: id };
    //   this.items = [...this.items, newProduct];
    // }
    // console.log(this.items);
    // return this.items;
  }
  async getProductById(productId) {
    const id = productId;
    let product;
    try {
      product = await Product.findById(id);
    } catch (error) {
      return error.message("error occured when looking for product");
    }
    if (!product) {
      return "cant find product";
    }

    return product;

    // return this.items.find((product) => product.id === id);
  }
  async deleteProduct(productId) {
    await Product.deleteOne({ _id: productId });
    return `Product with id ${productId} DELETED`;
  }
  // deleteProduct(productId) {
  //   const id = productId;
  //
  //   this.items = this.items.filter((product) => product.id !== id);
  //
  //   return this.items;
  // }
  // async getSingleProduct() {
  //   const productDb = await this.getProductById(productId);
  //
  //   return productDb;
  // }
  async updateProduct(productId, body) {
    const id = productId;
    const { name, price, description } = body;

    const updatedProduct = await this.getProductById(id);

    if (name) updatedProduct.name = name;

    if (price) updatedProduct.price = price;

    if (description) updatedProduct.description = description;

    const newProduct = new Product(updatedProduct);
    await newProduct.save();
    return `Product with id ${id} updated`;
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
