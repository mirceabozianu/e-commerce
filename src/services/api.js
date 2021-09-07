
export const getCategories = async () => {
  try {
    const categoriesResp = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categories = await categoriesResp.json();
    return categories;
  } catch (err) {
    console.error("There was an error fetching Categories: " + err);
  }
};
