import { baseApiUrl } from "./api.js";

const accountUrl = baseApiUrl + "accounts";

const createAccount = async (name, email, password) => {
  const response = await fetch(accountUrl, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      author: false,
      authorId: null,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return await response.json();
};

const getAccounts = async () => {
  const response = await fetch(accountUrl);
  return await response.json();
};

const getAccountByEmail = async (email) => {
  const accounts = await getAccounts();
  const account = accounts.filter((acc) => acc.email === email)[0];
  return account;
};

const updateAccount = async (acc) => {
  const response = await fetch(accountUrl + "/" + id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(acc),
  });
  return await response.json();
};

const getLocalAccount = () => {
  const account = localStorage.getItem("account");

  if (account == null) {
    return null;
  }

  return JSON.parse(account);
};

const upsertLocalAccount = (account) => {
  localStorage.setItem("account", JSON.stringify(account));
};

const removeLocalAccount = () => {
  localStorage.removeItem("account");
};

export {
  createAccount,
  getAccounts,
  getAccountByEmail,
  updateAccount,
  upsertLocalAccount,
  getLocalAccount,
  removeLocalAccount,
};
