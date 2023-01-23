const truncate = (text, length) => {
  const slicedString = `${text.slice(0,length)}...`;
  return slicedString;
};

export default truncate;