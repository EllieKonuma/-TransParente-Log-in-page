export class Post {
  authorId;
  title;
  intro;
  thumbnail;
  id;
  constructor({ authorId, title, intro, thumbnail = null, id }) {
    this.authorId = authorId;
    this.title = title;
    this.intro = intro;
    this.thumbnail = thumbnail;
    this.id = id;
  }
}
