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

  test("return stack instance when the action is pop", () => {
    expect(stack({ stackInstance: [], action: "pop" })).toEqual([]);
  });

  test("return stack instance with the last element removed when the action is pop", () => {
    expect(stack({ stackInstance: [1, 2], action: "pop" })).toEqual([1]);
    expect(stack({ stackInstance: [1, 2, 3], action: "pop" })).toEqual([1, 2]);
    expect(stack({ stackInstance: [1, 2, 3, 4], action: "pop" })).toEqual([
      1, 2, 3,
    ]);
  });

  test("return true when the action is empty check and stack is empty", () => {
    expect(stack({ stackInstance: [], action: "Empty cHeck" })).toBe(true);
  });

  test("return false when the action is empty check and stack isn't empty", () => {
    expect(stack({ stackInstance: [1, 2], action: "Empty cHeck" })).toBe(false);
  });
});
