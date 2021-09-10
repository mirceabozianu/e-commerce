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
