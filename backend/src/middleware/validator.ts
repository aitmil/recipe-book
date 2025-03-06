import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import status from 'http-status';

import { ApiError } from '../errors';
import { VALIDATION_ERROR_LOG, VALIDATION_ERROR_METHOD } from '../constants';

const validator = (
    request: Request,
    _response: Response,
    next: NextFunction,
): void => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        const errorMessage = errors.array()[0].msg;

        const validationError = new ApiError(
            VALIDATION_ERROR_LOG,
            errorMessage,
            VALIDATION_ERROR_METHOD,
            status.BAD_REQUEST,
            true,
        );

        return next(validationError);
    }

    next();
};

export default validator;
