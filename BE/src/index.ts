import express, { Application } from 'express';
import cors from 'cors';

import { config } from './config';
import { routes } from './routes';
import { ErrorHandler } from './errors';
import { Logger } from './libs';
import { errorMiddleware } from './middleware';

const app: Application = express();

const errorHandler = new ErrorHandler(Logger);

const { port, host } = config;

app.set('trust proxy', 1);
app.use(
    cors({
        origin: host,
        credentials: true,
        methods: ['GET'],
        allowedHeaders: ['Content-Type'],
    }),
);

app.use('/api', routes);

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port} 🚜🚜🚜`);
});

process.on('uncaughtException', async (error: Error) => {
    await errorHandler.handleError(error);
    if (!errorHandler.isTrustedError(error)) process.exit(1);
});

process.on('unhandledRejection', (reason: Error) => {
    throw reason;
});
