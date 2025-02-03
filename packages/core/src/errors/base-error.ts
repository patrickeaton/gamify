/**
 * @description A base error that all other errors inherit from, includes the status code and message
 */
export class BaseError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = 'Error';
    this.statusCode = 500;
  }
}
