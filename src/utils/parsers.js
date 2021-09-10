import electronics from "../assets/images/electronics.jpeg";
import jewelery from "../assets/images/jewelery.jpeg";
import men from "../assets/images/men.jpeg";
import women from "../assets/images/women.jpeg";

const images = [electronics, jewelery, men, women];

export function parseCategories(data) {
  return data.map((item, index) => {
    const dataObj = {
      name: item,
      id: index,
      url: `/${item}`,
      imageSrc: images[index] ? images[index] : "NO IMAGE",
    };

    return dataObj;
  });
}
