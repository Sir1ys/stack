export type Props = {
  stackInstance: Number[];
  action: string;
  element?: number;
};

function stack({ stackInstance, action, element }: Props) {
  const insensitiveAction = action.toLowerCase();
  const copyOfTheStack = [...stackInstance];

  if (insensitiveAction === "push") return [...copyOfTheStack, element];

  if (insensitiveAction === "pop") return [...copyOfTheStack].slice(0, -1);

  if (insensitiveAction === "empty check") return copyOfTheStack.length === 0;

  if (insensitiveAction === "size") return copyOfTheStack.length;

  if (insensitiveAction === "peek" && copyOfTheStack.length > 0)
    return copyOfTheStack[copyOfTheStack.length - 1];

  return [];
}
module.exports = stack;
