const normalizeUrl = (url) => {
let result;
if (url.startsWith('https://')) {
  return url;
} else {
  return `https://${url}`;
}
};