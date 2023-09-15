import { Account } from "../classes/Account.js";

window.onload = () => {
  console.log("oooioioioio");
  const storedAcc = localStorage.getItem("account");

  if (storedAcc == null) {
    window.location = "../index.html";
  }

  const account = new Account(JSON.parse(storedAcc));

  console.log(account);

  account.hey();
};
