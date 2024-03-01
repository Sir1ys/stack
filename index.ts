export type Props = {
  stackInstance: Number[];
  action: string;
  element?: number;
};

function stack({ stackInstance, action, element }: Props) {
  const insensitiveAction = action.toLowerCase();
  const copyOfTheStack = [...stackInstance];

  switch (insensitiveAction) {
    case "push":
      return [...copyOfTheStack, element];
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
      return [];
  }
}
module.exports = stack;
