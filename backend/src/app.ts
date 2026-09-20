/** @format */

import express from 'express';
import authRoutes from './modules/auth/auth.routes.js';
import { errorMiddleware } from './middleware/errors/error.middleware.js';

const app = express();
app.use(express.json()); // parse json data from the request
app.use('/api/v1/auth', authRoutes); // hands off to the auth routes
app.use(errorMiddleware); // catches any errors at the end

export default app;
