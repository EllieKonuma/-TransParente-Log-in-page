import { updateAccount } from "../controller/accountController.js";

export class Account {
  name;
  email; // privado
  password; // privado
  author = false;
  constructor({ name, email, password, author, id }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.author = author;
    this.id = id;
  }

  async becomeAuthor(response) {
    if (response === "yes") {
      this.author = true;
      updateAccount(this, id);
      return console.log("Now you are an Author!");
    } else if (response === "no") {
      return console.log("Not a problem you still just a User.");
    } else {
      new Error("Response not apropiate is just Yes or No.");
    }
  }

  verifyPassword(password) {
    if (!(this.password === password)) {
      alert("Password Invalid!");
      throw new Error("Password Invalid!");
    } else {
      console.log("Aprovado");
      return true;
    }
  }

  hey() {
    alert(`Hey, ${this.name}!!!`);
  }
}

class Post {
  authorName;
  title;
  intro;
  constructor() {}
}
