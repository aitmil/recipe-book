import express, { Response } from 'express';

import recipesRoutes from './recipe.routes';
import { Logger } from '../libs';

const router = express.Router();

router.get('/', (_, res: Response) => {
    Logger.error('This is an error log');
    Logger.warn('This is a warn log');
    Logger.info('This is a info log');
    Logger.debug('This is a debug log');
    res.status(200).json({ service: 'Health check successful!' });
});

router.use('/recipes', recipesRoutes);

export default router;
