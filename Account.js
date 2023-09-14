export class Account {
  name;
  email; // privado
  password; // privado
  static accounts = [];
  author = false;
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;

    this.#pushAcc();
  }

  #pushAcc() {
    Account.accounts.push(this);
  }
  becomeAuthor(response) {
    this.author = true;
  }
}
