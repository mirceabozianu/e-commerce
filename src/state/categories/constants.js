import { getCategories } from "services/api";
import { parseCategories } from "utils/parsers";

export const getAndParseCategories = async () => {
  const categories = await getCategories();
  const parsedCategories = parseCategories(categories);
  return await parsedCategories;
};
