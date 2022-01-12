export class Repository {
  constructor(Document) {
    this.Document = Document;
  }
  async getItems() {
    try {
      const items = await this.Document.find();

      return {
        data: items,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error: error,
      };
    }
  }
  async createItem(item) {
    const newItem = new this.Document(item);
    try {
      await newItem.save();

      return {
        data: newItem,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error: error,
      };
    }
  }
  async getItemById(id) {
    let item;

    try {
      item = await this.Document.findById(id);
    } catch (error) {
      return {
        data: null,
        error: error,
      };
    }
    if (!item) {
      return { data: null, error: null };
    }
    return item;
  }
  async deleteItem(productId) {
    try {
      const isDeleted = await this.Document.deleteOne({ _id: productId });
      if (isDeleted.deletedCount === 1) {
        return {
          data: true,
          error: null,
        };
      } else {
        return {
          data: false,
          error: null,
        };
      }
    } catch (error) {
      return {
        data: null,
        error: error,
      };
    }
  }

  async updateItem(item) {
    try {
      const itemToUpdate = new this.Document(item);

      await itemToUpdate.save();
      return {
        data: itemToUpdate,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error: error,
      };
    }
  }
}
