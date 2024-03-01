const stack = require("./index");

describe("stack", () => {
  test("return stack instance with the new element added to the beginning of the array when the action is push", () => {
    expect(stack({ stackInstance: [1], action: "push", element: 2 })).toEqual([
      1, 2,
    ]);
    expect(
      stack({ stackInstance: [1, 2], action: "push", element: 3 })
    ).toEqual([1, 2, 3]);
  });
  test("return negative numbers are invalid statement when the action is push", () => {
    expect(stack({ stackInstance: [1], action: "push", element: -2 })).toBe(
      "negative numbers are invalid!"
    );
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

  test("return 0 when the action is size and stack is empty", () => {
    expect(stack({ stackInstance: [], action: "size" })).toBe(0);
  });
  test("return stack's size when the action is size and stack isn't empty", () => {
    expect(stack({ stackInstance: [1], action: "size" })).toBe(1);
    expect(stack({ stackInstance: [1, 2], action: "size" })).toBe(2);
    expect(stack({ stackInstance: [1, 2, 3], action: "size" })).toBe(3);
  });

  test("return there is no elements to peek statement if the the action is peek and stack is empty", () => {
    expect(stack({ stackInstance: [], action: "peek" })).toBe(
      "there is no elements to peek!"
    );
  });
  test("return first element when the action is peek and stack has just one element", () => {
    expect(stack({ stackInstance: [1], action: "peek" })).toEqual(1);
  });
  test("return last element when the action is peek and stack has more than one element", () => {
    expect(stack({ stackInstance: [1, 2, 3], action: "peek" })).toEqual(3);
  });

  test("return stack is too big statement when stack length is more than 10", () => {
    expect(
      stack({
        stackInstance: [1, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 8],
        action: "peek",
      })
    ).toBe("stack is too big!");
  });
});
