import status from 'http-status';

import { ApiError } from '../errors';
import { INTERNAL_SERVER_ERROR } from '../constants';
import { IRecipe, IRecipeService } from '../interfaces';
import { axiosInstance } from '../libs';

export class RecipeService implements IRecipeService {
    async getAllRecipes(): Promise<IRecipe[]> {
        try {
            const response = await axiosInstance.get<{ meals: IRecipe[] }>(
                '/search.php?s=',
            );

            return response.data.meals || [];
        } catch (err) {
            if (err instanceof ApiError) {
                throw err;
            }
            throw new ApiError(
                INTERNAL_SERVER_ERROR,
                'GET_ALL_RECIPES_ERROR_MESSAGE',
                'GET_ALL_RECIPES_SERVICE_METHOD',
                status.INTERNAL_SERVER_ERROR,
                true,
            );
        }
    }

    async getRecipesByIngredient(ingredient: string): Promise<IRecipe[]> {
        try {
            const response = await axiosInstance.get<{ meals: IRecipe[] }>(
                `/filter.php?i=${ingredient}`,
            );
            return response.data.meals || [];
        } catch (err) {
            if (err instanceof ApiError) {
                throw err;
            }
            throw new ApiError(
                INTERNAL_SERVER_ERROR,
                'GET_RECIPES_BY_INGREDIENT_ERROR_MESSAGE',
                'GET_RECIPES_BY_INGREDIENT_SERVICE_METHOD',
                status.INTERNAL_SERVER_ERROR,
                true,
            );
        }
    }

    async getRecipesByCountry(country: string): Promise<IRecipe[]> {
        try {
            const response = await axiosInstance.get<{ meals: IRecipe[] }>(
                `/filter.php?a=${country}`,
            );
            return response.data.meals || [];
        } catch (err) {
            if (err instanceof ApiError) {
                throw err;
            }
            throw new ApiError(
                INTERNAL_SERVER_ERROR,
                'GET_RECIPES_BY_COUNTRY_ERROR_MESSAGE',
                'GET_RECIPES_BY_COUNTRY_SERVICE_METHOD',
                status.INTERNAL_SERVER_ERROR,
                true,
            );
        }
    }

    async getRecipesByCategory(category: string): Promise<IRecipe[]> {
        try {
            const response = await axiosInstance.get<{ meals: IRecipe[] }>(
                `/filter.php?c=${category}`,
            );
            return response.data.meals || [];
        } catch (err) {
            if (err instanceof ApiError) {
                throw err;
            }
            throw new ApiError(
                INTERNAL_SERVER_ERROR,
                'GET_RECIPES_BY_CATEGORY_ERROR_MESSAGE',
                'GET_RECIPES_BY_CATEGORY_SERVICE_METHOD',
                status.INTERNAL_SERVER_ERROR,
                true,
            );
        }
    }

    async getRecipeDetailsById(id: string): Promise<IRecipe> {
        try {
            const response = await axiosInstance.get<{ meals: IRecipe[] }>(
                `/lookup.php?i=${id}`,
            );
            return response.data.meals[0];
        } catch (err) {
            if (err instanceof ApiError) {
                throw err;
            }
            throw new ApiError(
                INTERNAL_SERVER_ERROR,
                'GET_RECIPE_DETAILS_BY_ID_ERROR_MESSAGE',
                'GET_RECIPE_DETAILS_BY_ID_SERVICE_METHOD',
                status.INTERNAL_SERVER_ERROR,
                true,
            );
        }
    }
}

export const recipeService = new RecipeService();
