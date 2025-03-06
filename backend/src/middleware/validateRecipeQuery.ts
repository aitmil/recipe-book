import { query, ValidationChain } from 'express-validator';

export const validateRecipeQuery: ValidationChain[] = [
    query('category')
        .optional()
        .trim()
        .notEmpty()
        .withMessage('Category must not be empty.')
        .isString()
        .withMessage('Category must be a string.'),
    query('ingredient')
        .optional()
        .trim()
        .notEmpty()
        .withMessage('Ingredient must not be empty.')
        .isString()
        .withMessage('Ingredient must be a string.'),
    query('country')
        .optional()
        .trim()
        .notEmpty()
        .withMessage('Country must not be empty.')
        .isString()
        .withMessage('Country must be a string.'),
];
