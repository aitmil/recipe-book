import { param, ValidationChain } from 'express-validator';

export const validateIdParam = (): ValidationChain => {
    return param('id')
        .isInt({ min: 1 })
        .withMessage('Invalid id. Must be a positive integer.');
};

export default validateIdParam;
