import { getAccounts } from "../controller/accountController.js";

export const verifyAcc = async (email, pass) => {
  let account = await getAccounts();
  account = account.filter((acc) => acc.email === email)[0];

  console.log(account);

  if (account == null) {
    alert("Account not found!");
    throw new Error("Account not found!");
  } else if (!(account.password === pass)) {
    alert("Password Invalid!");
    throw new Error("Password Invalid!");
  } else {
    console.log("Aprovado");
  }
};
