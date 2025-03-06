import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'http://localhost:5000',
};
