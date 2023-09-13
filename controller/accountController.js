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

export { createAccount };
