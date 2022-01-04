export class Repository {
  constructor(documentName) {
    this.documentName = documentName;
  }
  async getItems() {
    try {
      const items = await this.documentName.find();

      return items;
    } catch (error) {
      return error.message;
    }
  }
  async createItem(item) {
    const newItem = new this.documentName(item);
    try {
      await newItem.save();
      return "Item saved!";
    } catch (error) {
      return error.message;
    }
  }
  async getItemById(id) {
    let item;
    try {
      item = await this.documentName.findById(id);
    } catch (error) {
      return error.message("error occured when looking for item");
    }
    if (!item) {
      return `cant find item with id: ${id}`;
    }
    return item;
  }
  async deleteItem(productId) {
    await this.documentName.deleteOne({ _id: productId });
    return `Item with id ${productId} DELETED`;
  }

  async updateItem(item) {
    const itemToUpdate = new this.documentName(item);
    await itemToUpdate.save();
    return `Item with id ${item._id} updated`;
  }
}
