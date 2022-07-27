import { OrderService } from "../OrderService.js";
import { Repository } from "../../repository/repository.js";
import Order from "../../models/orderModel.js";
import { productRatingService } from "../../routes/products.js";
import { ProductService } from "../ProductService.js";
import Product from "../../models/productModel.js";
import { categoryService } from "../../routes/categories.js";

describe("OrderService", () => {
  const productService = new ProductService(
    new Repository(Product),
    productRatingService,
    categoryService
  );
  const orderService = new OrderService(new Repository(Order), productService);

  categoryService.createCategory("pizza");
  const createTestProduct = async () => {
    return await productService.createProduct(
      "pepperoni",
      38,
      "pizza",
      "Pizza pepperoni",
      "images/pizza.jpg"
    );
  };

  const createTestOrder = (createdProduct) => {
    return orderService.createOrder(
      [
        {
          productId: createdProduct.data._id,
          productName: createdProduct.data.name,
          quantity: 1,
          price: 38,
          total: 38,
        },
      ],
      "213556741987",
      4
    );
  };

  const orderByUserWithMoreOrders = (createdProduct) => {
    return orderService.createOrder(
      [
        {
          productId: createdProduct.data._id,
          productName: createdProduct.data.name,
          quantity: 1,
          price: 38,
          total: 38,
        },
      ],
      "213556741987",
      6
    );
  };

  it("should return empty array of orders on new db", async () => {
    expect(await orderService.getOrders("asc")).toEqual({
      data: [],
      error: null,
    });
  });
  it("creating order should increase number of orders by 1", async () => {
    expect((await orderService.getOrders("asc")).data).toHaveLength(0);
    const createdProduct = await createTestProduct();
    await createTestOrder(createdProduct);
    expect((await orderService.getOrders("asc")).data).toHaveLength(1);
  });
  it("should return undefined when order with given id not found", async () => {
    expect((await orderService.getOrderById("999999123456")).data).toBeNull();
  });
  it("should create order and return order by id", async () => {
    const createdProduct = await createTestProduct();
    const {
      data: { _id },
    } = await createTestOrder(createdProduct);
    expect((await orderService.getOrderById(_id)).data).toBeTruthy();
  });

  it("should delete order with given id", async () => {
    const createdProduct = await createTestProduct();
    const {
      data: { _id },
    } = await createTestOrder(createdProduct);
    expect((await orderService.getOrderById(_id)).data).toBeTruthy();
    await orderService.deleteOrder(_id);
    expect((await orderService.getOrderById(_id)).data).toBeNull();
  });

  it("should update order with given id", async () => {
    const createdProduct = await createTestProduct();
    const {
      data: { _id },
    } = await createTestOrder(createdProduct);
    const body = {
      status: "done",
    };
    expect((await orderService.updateOrder(_id, body)).data.status).toEqual(
      "done"
    );
  });

  it("should give discount if amountOfOrders made by user is greater than 5", async () => {
    const createdProduct = await createTestProduct();
    const {
      data: { _id },
    } = await orderByUserWithMoreOrders(createdProduct);
    expect((await orderService.getOrderById(_id)).data.subTotal).toEqual(34.2);
  });
});
