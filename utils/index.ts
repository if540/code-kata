export const jsonStrTotoLocaleDateString = function (val: string) {
  const newDate = new Date(val);
  return newDate.toLocaleDateString().replaceAll("/", "-");
};
