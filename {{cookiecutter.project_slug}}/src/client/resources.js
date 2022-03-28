import { reverse } from "./constants";
import { UserModel } from "./models";

class Resource {
  constructor(instance) {
    this._instance = instance;
  }
}

export class Authentication extends Resource {
  async login({ email, password }) {}

  async register() {}

  async user() {
    return null;
  }

  async logout() {}
}
