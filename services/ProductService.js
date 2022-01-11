
import {productService} from "../routes/products.js";


export class ProductService {
  constructor(repository) {
    this.repository = repository
  }
  async getProducts() {


    return await productService.repository.getItems();
  }
  async createProduct(name, price, description) {
    const product = {
      name: name,
      price: price,
      description: description,
    };

    return await productService.repository.createItem(product);

  }
  async getProductById(id) {


    return await productService.repository.getItemById(id);


  }
  async deleteProduct(productId) {


    return await productService.repository.deleteItem(productId);
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

    return await productService.repository.updateItem(updatedProduct);
  }
}

