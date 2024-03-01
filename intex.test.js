const stack = require("./index");

describe("stack", () => {
  test("return stack instance when the action is push", () => {
    expect(stack([], "PUSH")).toBe([]);
  });
});
