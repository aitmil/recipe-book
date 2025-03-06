import axios from "axios";
import {
  FetchRecipeResponse,
  FetchRecipesParams,
  FetchRecipesResponse,
  IRecipe,
} from "./definitions";

const API_BASE_URL = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

if (!API_BASE_URL) {
  throw new Error("API_BASE_URL is not defined in environment variables");
}

export async function fetchRecipes(
  params: FetchRecipesParams = {}
): Promise<IRecipe[]> {
  const url = new URL(`${API_BASE_URL}/api/recipes`);

  if (params.country) url.searchParams.append("country", params.country);
  if (params.ingredient)
    url.searchParams.append("ingredient", params.ingredient);
  if (params.category) url.searchParams.append("category", params.category);

  try {
    const response = await axios.get<FetchRecipesResponse>(url.toString());
    return response.data.data || [];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unknown error:", error);
    }
    throw new Error("Failed to fetch recipes");
  }
}

export const fetchRecipeById = async (id: string): Promise<IRecipe> => {
  const url = `${API_BASE_URL}/api/recipes/${id}`;

  try {
    const response = await axios.get<FetchRecipeResponse>(url);

    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        `Axios error fetching recipe ${id}:`,
        error.response?.data || error.message
      );
    } else {
      console.error(`Unknown error fetching recipe ${id}:`, error);
    }
    throw error;
  }
};
