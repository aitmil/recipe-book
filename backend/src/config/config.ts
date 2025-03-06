import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'http://localhost:3000',
    api_url: process.env.BASE_API_URL || '',
};
