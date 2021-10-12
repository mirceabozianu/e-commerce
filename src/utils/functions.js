export const multiplyProducts = (products, multiplyingNumber) => {
  const accumulator = [];

  for (
    let i = 1;
    i <= multiplyingNumber * products.length;
    i += products.length
  ) {
    const newProducts = new Array(...products.slice());
    const mappedIdsProducts = newProducts.map((item) => {
      return {
        ...item,
        id: item.id + i,
      };
    });
    accumulator.push(mappedIdsProducts);
  }
  return accumulator.flat(Infinity);
};
