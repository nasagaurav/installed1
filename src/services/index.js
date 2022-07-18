export const getAllProducts = async () => {
  let data = await axios
    .get('https://l-ecommerce-default-rtdb.firebaseio.com/products.json')
    .then((res) => res.data)
    .then((d) => d.map((x) => ({ ...x, image: img(x.id) })))
    .catch((e) => []);

  return data;
};
export const getAllTags = async () => {
  let data = await axios
    .get('https://l-ecommerce-default-rtdb.firebaseio.com/tags.json')
    .then((res) => res.data)
    .catch((e) => []);

  return data;
};
export const getAllFilters = async () => {
  let data = await axios
    .get('https://l-ecommerce-default-rtdb.firebaseio.com/filters.json')
    .then((res) => res.data)
    .catch((e) => []);

  return data;
};
export const getAllUsers = async () => {
  let data = await axios
    .get('https://l-ecommerce-default-rtdb.firebaseio.com/users.json')
    .then((res) => res.data)
    .then((d) => {
      return d;
      // transform(d);
    })
    .catch((e) => []);

  return data;
};
