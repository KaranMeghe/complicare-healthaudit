/** @format */

import { Router, type NextFunction, type Request, type Response } from 'express';
import { loginController, registerController } from './auth.controller.js';
import { validateRequest } from '../../middleware/auth.middleware.js';
import { loginSchema, signupSchema } from './auth.validation.js';
import asyncHandler from '../../middleware/errors/asyncHandler.js';

const router = Router();

// POST /api/v1/auth/register
router.post('/register', validateRequest(signupSchema), asyncHandler(registerController));

// POST /api/v1/auth/login
router.post('/login', validateRequest(loginSchema), asyncHandler(loginController));

export default router;
