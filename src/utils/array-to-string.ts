export const arrayToString = (array: (string | null)[] | null | undefined) => {
  return array ? array?.toString().split(',').join(', ') : '';
};
