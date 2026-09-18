/** @format */

import { prisma } from '../../lib/prisma.js';
import type { SignupRequest } from './auth.types.js';
import { hashPassword } from '../../lib/password.js';
import { ConflictError } from '../../middleware/errors/ConflictError.js';

export const registerUser = async (data: SignupRequest) => {
  // email already exists check
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existingUser) {
    throw new ConflictError('Email already exists');
  }

  // password hashing
  const passwordHash = await hashPassword(data.password);

  //create user in database
  const user = await prisma.user.create({
    data: {
      email: data.email,
      passwordHash,
      firstName: data.firstName,
      lastName: data.lastName,
    },
  });

  // return user response
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
  };
};
