export class Repository {
  constructor(Document) {
    this.Document = Document;
  }
  async execute(action) {
    try {
      const data = await action;
      return {
        data,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error,
      };
    }
  }
  getItems() {
    return this.execute(this.Document.find());
  }
  async createItem(item) {
    const newItem = new this.Document(item);

    return this.execute(newItem.save());
  }
  getItemById(id) {
    return this.execute(this.Document.findById(id));
  }
  async deleteItem(id) {
    return this.execute(this.Document.findOneAndDelete({ _id: id }));
  }

  async updateItem(id, body) {
    return this.execute(
      this.Document.findOneAndUpdate({ _id: id }, { ...body }, { new: true })
    );
  }
}
