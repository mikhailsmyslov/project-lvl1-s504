export default (number) => {
  if (number < 2) return false;
  const iteration = (val, div) => {
    if (div === 1) return true;
    if (val % div === 0) return false;
    return iteration(val, div - 1);
  };
  return iteration(number, Math.floor(number / 2));
};
