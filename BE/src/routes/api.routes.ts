import express, { Response } from 'express';

import { Logger } from '../libs';

const router = express.Router();

router.get('/', (_, res: Response) => {
    Logger.error('This is an error log');
    Logger.warn('This is a warn log');
    Logger.info('This is a info log');
    Logger.debug('This is a debug log');
    res.status(200).json({ service: 'Health check successful!' });
});

export default router;
