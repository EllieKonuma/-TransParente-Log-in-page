import { createAccount } from "../controller/accountController.js";
import { Account } from "../classes/Account.js";

export const buttonSingUp = document.querySelector("#sendSignUp");

buttonSingUp.addEventListener("click", async function (e) {
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

  const newAcc = await createAccount(
    signUpName.value,
    signUpEmail.value,
    signUpPassword.value
  );

  if (newAcc.id != null) {
    const account = new Account(newAcc);
    window.localStorage.setItem("account", JSON.stringify(account)); // por enquanto

    window.location = "pages/posts.html";
  } else {
    alert("Fail to create account, please try again later.");
  }
});
