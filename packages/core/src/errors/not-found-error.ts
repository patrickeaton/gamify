import { BaseError } from "./base-error";

export class NotFoundError extends BaseError {
    constructor(message = 'Access Denied: Not Found') {
      super(message);
      this.name = 'NotFoundError';
      this.statusCode = 403;
    }
  }