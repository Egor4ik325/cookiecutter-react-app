class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.email = data.email;
  }
}

export { User as UserModel };
