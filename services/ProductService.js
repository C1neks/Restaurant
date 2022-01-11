import { uuid } from "uuidv4";
import Product from "../models/productModel.js";
import { Repository } from "../repository/repository.js";


export class ProductService {
  constructor() {}
  async getProducts() {
    const Items = new Repository(Product);

    return await Items.getItems();
  }
  async createProduct(name, price, description) {
    const product = {
      name: name,
      price: price,
      description: description,
    };
    const newitem = new Repository(Product);
    await newitem.createItem(product);
    // const newProduct = new Product(post);
    // try {
    //   await newProduct.save();
    //   return "Produkt został dodany!";
    // } catch (error) {
    //   return error.message;
    // }
    // if (Array.isArray(this.items)) {
    //   let newProduct = new ProductModel(name, price, description);
    //   newProduct = { ...newProduct, id: id };
    //   this.items = [...this.items, newProduct];
    // }
    // console.log(this.items);
    // return this.items;
  }
  async getProductById(id) {
    const newitem = new Repository(Product);

    return await newitem.getItemById(id);

    // return this.items.find((product) => product.id === id);
  }
  async deleteProduct(productId) {
    const repository = new Repository(Product);

    return await repository.deleteItem(productId);
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
    const repository = new Repository(Product);
    const updatedProduct = await this.getProductById(id);

    if (name) updatedProduct.name = name;

    if (price) updatedProduct.price = price;

    if (description) updatedProduct.description = description;

    return await repository.updateItem(updatedProduct);
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
