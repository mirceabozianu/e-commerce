export const getCategories = async () => {
  try {
    const categoriesResp = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    return categoriesResp.json();
  } catch (err) {
    console.error("There was an error fetching Categories: " + err);
  }
};

export const getProducts = async () => {
  try {
    const productsResp = await fetch(`https://fakestoreapi.com/products`);
    return productsResp.json();
  } catch (err) {
    console.error("There was an error fetching the products: " + err);
  }
};
