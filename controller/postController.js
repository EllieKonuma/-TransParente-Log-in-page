import { baseApiUrl } from "./api.js";

const postUrl = baseApiUrl + "posts";

const createPost = async (authorId, title, intro, thumbnail) => {
  const response = await fetch(postUrl, {
    method: "POST",
    body: JSON.stringify({
      authorId: authorId,
      title: title,
      intro: intro,
      thumbnail: thumbnail,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return await response.json();
};

// const getPostsId = async (id) => {
//   const response = await fetch(postUrl,`/${id}`);
//   return await response.json();
// };

export { createPost };
