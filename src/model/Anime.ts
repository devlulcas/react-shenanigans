export class Anime {
  englishTitle!: string;
  quote!: string;
  character!: string;
  japoneseTitle!: string;
  startDate!: string;
  endDate!: string;
  posterImage!: string;
  coverImage!: string;

  constructor(data: any) {
    this.englishTitle = data.anime;
    this.quote = data.quote;
    this.character = data.character;
    this.getDetails(data.anime);
  }

  static async getAnimeFromApi() {
    const url = "https://animechan.vercel.app/api/random";
    const animeData = await fetch(url).then((response) => response.json());

    const anime = new Anime(animeData);

    return anime;
  }

  private async getDetails(animeTitle: string) {
    let treatedTitle = animeTitle.replaceAll(" ", "%20").toLowerCase().trim();
    const url = `https://kitsu.io/api/edge/anime?filter[text]=${treatedTitle}`;

    // Pega apenas o primeiro resultado da procura (ignora animes com títulos semelhantes)
    const details = await fetch(url)
      .then((response) => response.json())
      .then((json) => json.data[0]);

    const attributes = details.attributes;

    this.japoneseTitle = attributes.titles["ja_jp"];
    this.startDate = attributes.startDate;
    this.endDate = attributes.endDate || "Not ended";
    this.posterImage = attributes.posterImage.large;
    this.coverImage = attributes.coverImage.small;
  }
}
