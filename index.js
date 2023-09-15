import { Account } from "./classes/Account.js";
import { buttonLogIn } from "./scripts/buttonLogIN.js";
import { buttonSingUp } from "./scripts/buttonSingUp.js";

window.onload = () => {
  if (localStorage.getItem("account")) {
    localStorage.clear();
  }
};
