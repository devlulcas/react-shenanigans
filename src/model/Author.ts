export class Author {
  id!: number;
  name!: string;
  username!: string;
  email!: string;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
  }

  static streamList(data: any): Author[] {
    return data.map((author: any) => new Author(author));
  }

  static async getAuthorsFromApi(ids: number[]) {
    const authorsData = ids.map((id) => {
      const authorUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
      const data = fetch(authorUrl).then((data) => data.json());
      return data;
    });

    const resolvedAuthorsData = await Promise.all(authorsData);
    return this.streamList(resolvedAuthorsData);
  }

  static async getUniqueAuthorFromApi(id: number) {
    const authorUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
    const resolvedAuthorData = await fetch(authorUrl).then((data) =>
      data.json(),
    );
    return new Author(resolvedAuthorData);
  }
}
