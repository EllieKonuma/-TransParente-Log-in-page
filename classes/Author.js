import { createPost } from "../controller/postController";
import { Post } from "./Post";

export class Author {
  name;
  pic;
  id;
  constructor({ name, pic, id }) {
    this.name = name;
    this.pic = pic;
    this.id = id;
  }

  newPost(title, intro, thumbnail) {
    const newPost = createPost(this.id, title, intro, thumbnail);
    new Post(newPost);
  }
}
