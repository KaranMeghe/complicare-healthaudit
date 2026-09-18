/** @format */

import express from 'express';
import authRoutes from './modules/auth/auth.routes.js';
import { errorMiddleware } from './middleware/error.middleware.js';

const app = express();
app.use(express.json());
app.use('/api/v1/auth', authRoutes);
app.use(errorMiddleware);

export default app;
