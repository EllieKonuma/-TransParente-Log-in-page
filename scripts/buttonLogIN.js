import { Account } from "../classes/Account.js";
import {
  getAccountByEmail,
  upsertLocalAccount,
} from "../controller/accountControllers.js";

export const buttonLogIn = document.querySelector("#sendLogIn");

buttonLogIn.addEventListener("click", async function (e) {
  // e.preventDefault();
  const logInEmail = document.querySelector("#logInEmail"); // todo: maybe .value here
  const logInPass = document.querySelector("#logInPass");

  console.log(`${logInEmail.value}\n${logInPass.value}`); // ex

  const resposeAcc = await getAccountByEmail(logInEmail.value);

  if (resposeAcc == null) {
    alert("Account not found!");
    throw new Error("Account not found!");
  }

  const account = new Account(resposeAcc);

  if (account.verifyPassword(logInPass.value)) {
    upsertLocalAccount(account);
    window.location = "pages/posts.html";
  }
});
