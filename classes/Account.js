import {
  updateAccount,
  upsertLocalAccount,
} from "../controller/accountControllers.js";
import { createAuthor } from "../controller/authorControllers.js";

updateAccount();

export class Account {
  name;
  email; // privado
  password; // privado
  author = false;
  authorId = null;
  constructor({ name, email, password, author, id, authorId }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.author = author;
    this.id = id;
    this.authorId = authorId;
  }

  async becomeAuthor(response) {
    if (response === "yes") {
      const author = await createAuthor(this.name);
      if (author == null) {
        throw Error("couldnlt create author for account, try again later");
      }

      this.author = true;
      this.authorId = author.id;

      updateAccount(this);
      upsertLocalAccount(this);

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
