import { Account } from "../classes/Account.js";
import { getLocalAccount } from "../controller/accountControllers.js";

window.onload = () => {
  console.log("oooioioioio");
  const storedAcc = getLocalAccount();

  if (storedAcc == null) {
    window.location = "../index.html";
  }

  const account = new Account(storedAcc);

  console.log(account);

  account.hey();
};
