export class Account {
  name;
  email;
  password;
  static accounts = [];
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;

    this.pushAcc();
  }
  get password() {
    return this.password;
  }

  pushAcc() {
    Account.accounts.push(this);
  }
}
