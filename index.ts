export type Props = {
  stackInstance: Number[];
  action: string;
  element?: number;
};

function stack({ stackInstance, action, element }: Props) {
  const insensitiveAction = action.toLowerCase();

  if (insensitiveAction === "push") return [...stackInstance, element];
}
module.exports = stack;
