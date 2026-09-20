/** @format */

import { Router, type NextFunction, type Request, type Response } from 'express';
import { registerController } from './auth.controller.js';
import { validateRequest } from '../../middleware/auth.middleware.js';
import { signupSchema } from './auth.validation.js';
import asyncHandler from '../../middleware/errors/asyncHandler.js';

const router = Router();

// POST /api/v1/auth/register
router.post('/register', validateRequest(signupSchema), asyncHandler(registerController));

export default router;
