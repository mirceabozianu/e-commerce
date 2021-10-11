import electronics from "../assets/images/electronics.jpeg";
import jewelery from "../assets/images/jewelery.jpeg";
import men from "../assets/images/men.jpeg";
import women from "../assets/images/women.jpeg";

const CATEGORIES = [
  {
    apiKey: "electronics",
    path: "electronics",
    image: electronics,
  },
  { apiKey: "jewelery", path: "jewelery", image: jewelery },
  {
    apiKey: "men-clothing",
    path: "men-clothing",
    image: men,
  },
  {
    apiKey: "women-clothing",
    path: "women-clothing",
    image: women,
  },
];

export function parseCategories(data) {
  return data.map((item, index) => {
    const dataObj = {
      name: item,
      id: CATEGORIES[index].apiKey,
      path: `/products/${CATEGORIES[index].path}`,
      imageSrc: CATEGORIES[index].image ? CATEGORIES[index].image : "NO IMAGE",
    };

    return dataObj;
  });
}
