import { UserService } from "../UserService.js";
import User from "../../models/userModel.js";
import { Repository } from "../../repository/repository.js";

describe("UserService", () => {
  const userService = new UserService(new Repository(User));
  const createTestUser = () =>
    userService.createUser("marcin", "marcin@gmail.com", false, "qwerty");

  it("should return empty array of users on new db", async () => {
    expect(await userService.getUsers()).toEqual({ data: [], error: null });
  });
  it("creating user should increase number of users by 1", async () => {
    expect((await userService.getUsers()).data).toHaveLength(0);
    await createTestUser();
    expect((await userService.getUsers()).data).toHaveLength(1);
  });
});
