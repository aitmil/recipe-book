import status from 'http-status';

import { ApiError } from '../errors';
import {
    API_ALL_RECIPES_PATH,
    API_CATEGORY_PATH,
    API_COUNTRY_PATH,
    API_INGREDIENT_PATH,
    API_RECIPE_DETAILS_PATH,
    GET_ALL_RECIPES_ERROR_MESSAGE,
    GET_ALL_RECIPES_SERVICE_METHOD,
    GET_RECIPE_DETAILS_BY_ID_ERROR_MESSAGE,
    GET_RECIPE_DETAILS_BY_ID_SERVICE_METHOD,
    GET_RECIPES_BY_CATEGORY_ERROR_MESSAGE,
    GET_RECIPES_BY_CATEGORY_SERVICE_METHOD,
    GET_RECIPES_BY_COUNTRY_ERROR_MESSAGE,
    GET_RECIPES_BY_COUNTRY_SERVICE_METHOD,
    GET_RECIPES_BY_INGREDIENT_ERROR_MESSAGE,
    GET_RECIPES_BY_INGREDIENT_SERVICE_METHOD,
    INTERNAL_SERVER_ERROR,
} from '../constants';
import { IRecipe, IRecipeService } from '../interfaces';
import { axiosInstance } from '../libs';

export class RecipeService implements IRecipeService {
    async getAllRecipes(): Promise<IRecipe[]> {
        try {
            const response = await axiosInstance.get<{ meals: IRecipe[] }>(
                API_ALL_RECIPES_PATH,
            );

            return response.data.meals || [];
        } catch (err) {
            if (err instanceof ApiError) {
                throw err;
            }
            throw new ApiError(
                INTERNAL_SERVER_ERROR,
                GET_ALL_RECIPES_ERROR_MESSAGE,
                GET_ALL_RECIPES_SERVICE_METHOD,
                status.INTERNAL_SERVER_ERROR,
                true,
            );
        }
    }

    async getRecipesByIngredient(ingredient: string): Promise<IRecipe[]> {
        try {
            const response = await axiosInstance.get<{ meals: IRecipe[] }>(
                `${API_INGREDIENT_PATH}${ingredient}`,
            );
            return response.data.meals || [];
        } catch (err) {
            if (err instanceof ApiError) {
                throw err;
            }
            throw new ApiError(
                INTERNAL_SERVER_ERROR,
                GET_RECIPES_BY_INGREDIENT_ERROR_MESSAGE,
                GET_RECIPES_BY_INGREDIENT_SERVICE_METHOD,
                status.INTERNAL_SERVER_ERROR,
                true,
            );
        }
    }

    async getRecipesByCountry(country: string): Promise<IRecipe[]> {
        try {
            const response = await axiosInstance.get<{ meals: IRecipe[] }>(
                `${API_COUNTRY_PATH}${country}`,
            );
            return response.data.meals || [];
        } catch (err) {
            if (err instanceof ApiError) {
                throw err;
            }
            throw new ApiError(
                INTERNAL_SERVER_ERROR,
                GET_RECIPES_BY_COUNTRY_ERROR_MESSAGE,
                GET_RECIPES_BY_COUNTRY_SERVICE_METHOD,
                status.INTERNAL_SERVER_ERROR,
                true,
            );
        }
    }

    async getRecipesByCategory(category: string): Promise<IRecipe[]> {
        try {
            const response = await axiosInstance.get<{ meals: IRecipe[] }>(
                `${API_CATEGORY_PATH}${category}`,
            );
            return response.data.meals || [];
        } catch (err) {
            if (err instanceof ApiError) {
                throw err;
            }
            throw new ApiError(
                INTERNAL_SERVER_ERROR,
                GET_RECIPES_BY_CATEGORY_ERROR_MESSAGE,
                GET_RECIPES_BY_CATEGORY_SERVICE_METHOD,
                status.INTERNAL_SERVER_ERROR,
                true,
            );
        }
    }

    async getRecipeDetailsById(id: string): Promise<IRecipe> {
        try {
            const response = await axiosInstance.get<{ meals: IRecipe[] }>(
                `${API_RECIPE_DETAILS_PATH}${id}`,
            );
            return response.data.meals[0];
        } catch (err) {
            if (err instanceof ApiError) {
                throw err;
            }
            throw new ApiError(
                INTERNAL_SERVER_ERROR,
                GET_RECIPE_DETAILS_BY_ID_ERROR_MESSAGE,
                GET_RECIPE_DETAILS_BY_ID_SERVICE_METHOD,
                status.INTERNAL_SERVER_ERROR,
                true,
            );
        }
    }
}

export const recipeService = new RecipeService();
