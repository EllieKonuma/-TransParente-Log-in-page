import { baseApiUrl } from "./api.js";

const authorUrl = baseApiUrl + "authors";

const createAuthor = async (name) => {
  const response = await fetch(authorUrl, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      pic: null,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return await response.json();
};

export { createAuthor };
