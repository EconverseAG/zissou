export default function parseUrl(url) {
  if (url && url.indexOf('http') === -1) {
    return `https://cdn.shopify.com/s/files/1/1526/6199/files/${url}`;
  }
}
