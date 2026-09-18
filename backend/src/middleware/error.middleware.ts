/** @format */

import type { NextFunction, Request, Response } from 'express';
import { ConflictError } from './errors/ConflictError.js';

export const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  if (err instanceof ConflictError) {
    return res.status(409).json({
      status: 'error',
      message: err.message,
    });
  }

  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};
