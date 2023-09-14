import { baseApiUrl } from "./api.js";

const accountUrl = baseApiUrl + "account";

const createAccount = async (acc) => {
  const response = await fetch(accountUrl, {
    method: "POST",
    body: JSON.stringify(acc),
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

// const logIn = async (acc) => {
//   fetch(accountUrl, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//     body: JSON.stringify(acc),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// };

export { createAccount, getAccounts };
