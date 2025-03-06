import express from 'express';

import { recipeController } from '../controllers';
import { validateIdParam, validateRecipeQuery, validator } from '../middleware';

const router = express.Router();

router.get(
    '/',
    validateRecipeQuery,
    validator,
    recipeController.getAllAvailableRecipes,
);

router.get(
    '/:id',
    validateIdParam(),
    validator,
    recipeController.getRecipeInfo,
);

export default router;
