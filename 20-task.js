  const makeItFunny = (str, n) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const index = str[i];
    if ((i + 1) % n === 0) {
  result = `${result}${index.toUpperCase()}`;
    } else {
      result = `${result}${index}`;
    }
    i = ++i;
  }
    return result;
  };