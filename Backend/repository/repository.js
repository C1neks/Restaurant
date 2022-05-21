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

  getItemsSorted(sortValue) {
    return "asc" === sortValue
      ? this.execute(this.Document.find().sort({ createdAt: 1 }))
      : this.execute(this.Document.find().sort({ createdAt: -1 }));
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
  getItemByProperty(property, value) {
    return this.execute(this.Document.findOne({ [property]: value }));
  }
  async deleteItem(id) {
    return this.execute(this.Document.findOneAndDelete({ _id: id }));
  }

  async updateItem(id, set, inc) {
    return this.execute(
      this.Document.findOneAndUpdate(
        { _id: id },
        {
          ...(set
            ? {
                $set: set,
              }
            : {}),
          ...(inc
            ? {
                $inc: inc,
              }
            : {}),
        },
        { new: true }
      )
    );
  }
}
