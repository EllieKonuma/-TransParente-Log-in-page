import { getAccounts } from "../controller/accountController.js";

export const buttonLogIn = document.querySelector("#sendLogIn");

buttonLogIn.addEventListener("click", async function (e) {
  e.preventDefault();
  const logInEmail = document.querySelector("#logInEmail");
  const logInPass = document.querySelector("#logInPass");

  const value = `${logInEmail.value}\n${logInPass.value}`;
  console.log(value);

  let account = await getAccounts();
  account = account.filter((acc) => acc.email === logInEmail.value)[0];

  console.log(account);

  if (account == null) {
    alert("Account not found!");
    throw new Error("Account not found!");
  } else if (!(account.password === logInPass.value)) {
    alert("Password Invalid!");
    throw new Error("Password Invalid!");
  } else {
    console.log("Aprovado");
  }
});
