import { createAccount } from "../controller/accountController.js";
import { Account } from "../Account.js";

export const buttonSingUp = document.querySelector("#sendSignUp");

buttonSingUp.addEventListener("click", function (e) {
  // e.preventDefault();
  const signUpName = document.querySelector("#signUpName");
  const signUpEmail = document.querySelector("#signUpEmail");
  const signUpPassword = document.querySelector("#signUpPassword");

  const value = `${signUpName.value}\n${signUpEmail.value}\n${signUpPassword.value}`;

  console.log(value);
  if (
    signUpName.value === "" ||
    signUpEmail.value === "" ||
    signUpPassword.value === ""
  ) {
    alert("Fill in all data!");
    throw new Error("Missing data");
  }
  createAccount(
    new Account(signUpName.value, signUpEmail.value, signUpPassword.value)
  );
});
