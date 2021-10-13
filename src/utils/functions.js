export const multiplyProducts = (products, multiplyingNumber) => {
  const accumulator = [];

  for (
    let i = 1;
    i <= multiplyingNumber * products.length;
    i += products.length
  ) {
    const newProducts = new Array(...products);
    const modifiedIdProducts = newProducts.map((product) => {
      return {
        ...product,
        id: product.id + i,
      };
    });
    accumulator.push(modifiedIdProducts);
  }
  return accumulator.flat();
};
