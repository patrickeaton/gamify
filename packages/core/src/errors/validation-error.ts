import { BaseError } from './base-error';

/**
 * @description Invalid Request Error
 */
export class ValidationError extends BaseError {
  constructor(message = 'Invalid Request: Invalid Parameters') {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 500;
  }
}
