const capitalize = (text) => {
const name = `${text.slice(0, 1).toUpperCase()}${text.slice(1, text.length)}`;
return name;
};