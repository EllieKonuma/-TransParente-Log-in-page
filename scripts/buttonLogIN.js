import { verifyAcc } from "./verifyAcc.js";

export const buttonLogIn = document.querySelector("#sendLogIn");

buttonLogIn.addEventListener("click", async function (e) {
  // e.preventDefault();
  const logInEmail = document.querySelector("#logInEmail");
  const logInPass = document.querySelector("#logInPass");

  const value = `${logInEmail.value}\n${logInPass.value}`;
  console.log(value);

  verifyAcc(logInEmail.value, logInPass.value);
});
