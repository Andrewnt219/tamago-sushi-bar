export const keyObjectToObjectWithKey = (object: object) => {
  const [key, value] = Object.entries(object)[0];
  return {
    id: key,
    ...value,
  };
};
