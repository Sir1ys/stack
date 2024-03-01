export type Props = {
  stackInstance: Number[];
  action: string;
  element?: number;
};

function stack({ stackInstance, action, element }: Props) {
  const insensitiveAction = action.toLowerCase();

  if (insensitiveAction === "push") return [...stackInstance, element];

  if (insensitiveAction === "pop") return [...stackInstance].slice(0, -1);
}
module.exports = stack;
