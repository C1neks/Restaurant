export class Repository {
  constructor(Document) {
    this.Document = Document;
  }
  async getItems() {
    try {
      const items = await this.Document.find();

      return items;
    } catch (error) {
      return error.message;
    }
  }
  async createItem(item) {
    const newItem = new this.Document(item);
    try {
      await newItem.save();
      console.log(newItem);
      return newItem;
    } catch (error) {
      return error.message;
    }
  }
  async getItemById(id) {
    let item;
    try {
      item = await this.Document.findById(id);
    } catch (error) {a.message("error occured when looking for item");
    }
    if (!item) {
      return `Cannot find item of id: ${id}`;
    }
    return item;
  }
  async deleteItem(productId) {
    const isDeleted = await this.Document.deleteOne({ _id: productId });


    if(isDeleted.deletedCount===1){
  return true;
} else
{return false}
  }

  async updateItem(item) {
    const itemToUpdate = new this.Document(item);
    await itemToUpdate.save();
    return itemToUpdate;
  }
}
