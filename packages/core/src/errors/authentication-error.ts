import { BaseError } from "./base-error";

  /**
   * @description Authentication permissions error
   */
  export class AccessDeniedError extends BaseError {
    constructor(message = 'Access Denied') {
      super(message);
      this.name = 'AccessDeniedError';
      this.statusCode = 403;
    }
  }
  
  
  