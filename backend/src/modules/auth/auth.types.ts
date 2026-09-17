/**
 * AUTH-002 Type Definitions
 *
 * Defines API contracts for authentication endpoints:
 * - POST /api/auth/signup
 * - POST /api/auth/login
 * - POST /api/auth/refresh
 * - POST /api/auth/logout
 * - GET /api/auth/me
 *
 * @format
 */

// ============================================================================
// REQUEST TYPES (What client sends)
// ============================================================================
export interface SignupRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// ============================================================================
// RESPONSE TYPES (What client recives)
// ============================================================================

export interface UserResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}
export interface SignupResponse {
  user: UserResponse;
  message: string;
}
