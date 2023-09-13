import { createAccount } from "../controller/accountController.js";
import { Account } from "../Account.js";

export const buttonSingUp = document.querySelector("#sendSignUp");

buttonSingUp.addEventListener("click", function (e) {
  e.preventDefault();
  const signUpName = document.querySelector("#signUpName");
  const signUpEmail = document.querySelector("#signUpEmail");
  const signUpPassword = document.querySelector("#signUpPassword");

  const value = `${signUpName.value}\n${signUpEmail.value}\n${signUpPassword.value}`;

  console.log(value);

  createAccount(
    new Account(signUpName.value, signUpEmail.value, signUpPassword.value)
  );
});
