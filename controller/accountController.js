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

const updateAccount = async (acc, id) => {
  fetch(accountUrl + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(acc),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

export { createAccount, getAccounts, updateAccount, getAccountByEmail };
