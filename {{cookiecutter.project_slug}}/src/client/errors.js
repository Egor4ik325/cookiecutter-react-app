export class NotFoundError extends Error {}

export class NotAuthenticatedError extends Error {}

export class BadRequestError extends Error {
  constructor(data) {
    super();
    this.data = data;
  }
}
