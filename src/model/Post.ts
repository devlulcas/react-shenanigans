import { Author } from "./Author";

export class Post {
  userId!: number;
  id!: number;
  title!: string;
  body!: string;
  author!: Author;

  constructor(data: any) {
    this.userId = data.userId;
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
    this.author = data.author;
  }

  static streamList(data: any): Post[] {
    return data.map((post: Post) => new Post(post));
  }

  static async getPostsFromApi() {
    const postUrl = "https://jsonplaceholder.typicode.com/posts/";

    const data: any[] = await fetch(postUrl).then((response) =>
      response.json(),
    );

    // Necessário buscar pelos autores dos posts
    const authorForEachPost: number[] = data.map((post: any) => post.userId);
    const uniqueAuthors = new Set(authorForEachPost);

    // Sets não possuem a função ".map" então é necessário espalhar o set em um array
    const authors = await Author.getAuthorsFromApi([...uniqueAuthors]);

    data.forEach((post) => {
      const postAuthor = authors.find((author) => author.id == post.userId);
      post.author = postAuthor;
    });

    return this.streamList(data);
  }

  static async getPostsFromApiByAuthor(id: number) {
    const postUrl = `https://jsonplaceholder.typicode.com/users/${id}/posts`;

    const data: any[] = await fetch(postUrl).then((response) =>
      response.json(),
    );

    const author = await Author.getUniqueAuthorFromApi(id);

    data.forEach((post) => {
      post.author = author;
    });

    return this.streamList(data);
  }
}
