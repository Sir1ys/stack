export type Props = {
  stackInstance: Number[];
  action: string;
  element?: number;
};

function stack({ stackInstance, action, element }: Props) {
  const insensitiveAction = action.toLowerCase();
  const copyOfTheStack = [...stackInstance];

  if (stackInstance.length > 10) return "stack is too big!";

  switch (insensitiveAction) {
    case "push":
      if (element && element > 0) return [...copyOfTheStack, element];
      return "negative numbers are invalid!";
    case "pop":
      return [...copyOfTheStack].slice(0, -1);
    case "empty check":
      return copyOfTheStack.length === 0;
    case "size":
      return copyOfTheStack.length;
    case "peek":
      if (copyOfTheStack.length > 0)
        return copyOfTheStack[copyOfTheStack.length - 1];
    default:
      return "there is no elements to peek!";
  }
}
module.exports = stack;
