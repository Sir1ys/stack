const stack = require("./index");

describe("stack", () => {
  test("return stack instance when the action is push", () => {
    expect(stack({ stackInstance: [1], action: "Push" })).toEqual([1]);
  });

  test("return stack instance with the new element added to the beginning of the array when the action is push", () => {
    expect(stack({ stackInstance: [1], action: "push", element: 2 })).toEqual([
      1, 2,
    ]);
    expect(
      stack({ stackInstance: [1, 2], action: "push", element: 3 })
    ).toEqual([1, 2, 3]);
  });
});
