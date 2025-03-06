import status from 'http-status';
import { NextFunction, Response, Request } from 'express';

import { recipeService } from '../services';
import { IRecipe, IRecipeController, IRecipeService } from '../interfaces';
import { SuccessHandler } from '../handlers';
import { Logger } from '../libs';
import { ApiError } from '../errors';
import {
    GET_RECIPE_ERROR_MESSAGE,
    GET_RECIPE_METHOD,
    GET_RECIPES_ERROR_MESSAGE,
    GET_RECIPES_METHOD,
    INTERNAL_SERVER_ERROR,
    LOGGER_INFO_GET_RECIPE_MESSAGE,
    LOGGER_INFO_GET_RECIPES_MESSAGE,
} from '../constants';

export class RecipeController implements IRecipeController {
    constructor(
        private recipeService: IRecipeService,
        private logger: typeof Logger,
    ) {}

    getAllAvailableRecipes = async (
        req: Request,
        res: Response<IRecipe[]>,
        next: NextFunction,
    ): Promise<void> => {
        try {
            const { ingredient, country, category } = req.query;

            let recipes: IRecipe[] = [];

            switch (true) {
                case !!ingredient:
                    recipes = await this.recipeService.getRecipesByIngredient(
                        ingredient as string,
                    );
                    break;
                case !!country:
                    recipes = await this.recipeService.getRecipesByCountry(
                        country as string,
                    );
                    break;
                case !!category:
                    recipes = await this.recipeService.getRecipesByCategory(
                        category as string,
                    );
                    break;
                default:
                    recipes = await this.recipeService.getAllRecipes();
            }

            SuccessHandler.ok(res, { data: recipes });
            this.logger.info(LOGGER_INFO_GET_RECIPES_MESSAGE);
        } catch (err) {
            if (err instanceof ApiError) {
                return next(err);
            }
            const error = new ApiError(
                INTERNAL_SERVER_ERROR,
                err instanceof Error ? err.message : GET_RECIPES_ERROR_MESSAGE,
                GET_RECIPES_METHOD,
                status.INTERNAL_SERVER_ERROR,
            );
            next(error);
        }
    };

    getRecipeInfo = async (
        req: Request,
        res: Response<IRecipe>,
        next: NextFunction,
    ): Promise<void> => {
        try {
            const { id } = req.params;

            const recipe = await this.recipeService.getRecipeDetailsById(id);

            SuccessHandler.ok(res, { data: recipe });
            this.logger.info(LOGGER_INFO_GET_RECIPE_MESSAGE);
        } catch (err) {
            if (err instanceof ApiError) {
                return next(err);
            }
            const error = new ApiError(
                INTERNAL_SERVER_ERROR,
                err instanceof Error ? err.message : GET_RECIPE_ERROR_MESSAGE,
                GET_RECIPE_METHOD,
                status.INTERNAL_SERVER_ERROR,
            );
            next(error);
        }
    };
}

export const recipeController = new RecipeController(recipeService, Logger);
