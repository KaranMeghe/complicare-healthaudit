/** @format */

import { type Request, type Response, type NextFunction } from 'express';
import { registerUser } from './auth.service.js';

export const registerController = async (req: Request, res: Response, _next: NextFunction) => {
  const result = await registerUser(req.body);

  res.status(201).json({
    status: 'success',
    user: result,
    message: 'User registered successfully',
  });
};
