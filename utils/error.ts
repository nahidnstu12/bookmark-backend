class CustomError extends Error {
  status: number;

  constructor(message: string, status: number = 500) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
  }
}

export const notFound = (msg = "Resource not found") => {
  return new CustomError(msg, 404);
};

export const badRequest = (msg = "Bad Request") => {
  return new CustomError(msg, 400);
};

export const serverError = (msg = "Internal Server Error") => {
  return new CustomError(msg, 500);
};

export const authenticationError = (msg = "Authentication Failed") => {
  return new CustomError(msg, 401);
};

export const authorizationError = (msg = "Permission Denied") => {
  return new CustomError(msg, 403);
};

// try {
//     throw notFound('Custom not found message');
// } catch (error) {
//     if (error instanceof CustomError) {
//         console.error(`Custom Error: ${error.message}`);
//         console.error(`Status: ${error.status}`);
//     } else {
//         console.error('Other error:', error);
//     }
// }
