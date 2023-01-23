const mySubstr = (str, length) => {
  let i = 0;
let result = '';
while (i < length) {
  result = `${result}${str[i]}`;
  i = i + 1;
}
return result;
};