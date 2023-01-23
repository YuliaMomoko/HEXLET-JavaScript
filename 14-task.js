const convertText = (text) => {
if (text === '') {
return '';
} else if (text[0] === text[0].toUpperCase()) {
  return text;
} 
  return reverse(text);
};