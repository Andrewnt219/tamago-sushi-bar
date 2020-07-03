import _ from 'lodash';

export const keyObjectToObjectWithKey = <T>(
  object: Record<string, T>
): T & { id: string } => {
  const [key, value] = Object.entries(object)[0];
  return {
    id: key,
    ...value,
  };
};

export const recursiveKeyObjectToObjectWithKey = <T extends object>(
  srcObj: Record<string, T>
): Record<string, T & { id: string }> => {
  return _.transform<T, Record<string, T & { id: string }>>(
    srcObj,
    (newObj, value, key) => (newObj[key] = _.assign(value, { id: key }))
  );
};
