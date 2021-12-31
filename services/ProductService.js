import { uuid } from "uuidv4";

let products = [];
export class productService {
  getProducts() {
    return products;
  }

  createProduct(req) {
    products.push({ ...req, id: uuid() });

    return products;
  }

  getProductById(req) {
    const { id } = req;

    return products.find((product) => product.id === id);
  }
  //
  deleteProduct(req) {
    const { id } = req;

    products = products.filter((product) => product.id !== id);

    return products;
  }

  updateProduct(req, body) {
    const { id } = req;
    const { name, price, description } = body;

    const updatedProduct = products.find((product) => product.id === id);

    if (name) updatedProduct.name = name;

    if (price) updatedProduct.price = price;

    if (description) updatedProduct.description = description;

    return `Product with id ${id} updated!`;
  }
}
