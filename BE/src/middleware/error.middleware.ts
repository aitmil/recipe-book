import { NextFunction, Request, Response } from 'express';

import Logger from '../libs/winston/logger';
import { ApiError, ErrorHandler } from '../errors';
import { INTERNAL_SERVER_ERROR } from '../constants';

const errorHandler = new ErrorHandler(Logger);

export async function errorMiddleware(
    err: ApiError,
    _: Request,
    res: Response,
    next: NextFunction,
) {
    if (!errorHandler.isTrustedError(err)) {
        next(err);
        return;
    }
    await errorHandler.handleError(err);
    res.status(err.httpCode || 500).json({
        message: err.message || INTERNAL_SERVER_ERROR,
    });
}
