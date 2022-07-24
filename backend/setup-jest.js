import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
let mongod;
beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const uri = mongod.getUri();
  await mongoose.connect(uri, mongooseOpts);
});
afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
});
