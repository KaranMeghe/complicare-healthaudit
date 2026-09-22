/** @format */

import { type Request, type Response, type NextFunction } from 'express';
import { registerUser } from './auth.service.js';

// Signup / Register user.
export const registerController = async (req: Request, res: Response, _next: NextFunction) => {
  const result = await registerUser(req.body);

  res.cookie('accessToken', result.accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    maxAge: 15 * 60 * 1000,
  });

  res.cookie('refreshToken', result.refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(201).json({
    status: 'success',
    user: result.user,
    message: 'User registered successfully',
  });
};
