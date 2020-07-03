export const keyObjectToObjectWithKey = <T>(
  object: Record<string, T>
): T & { id: string } => {
  const [key, value] = Object.entries(object)[0];
  return {
    id: key,
    ...value,
  };
};
