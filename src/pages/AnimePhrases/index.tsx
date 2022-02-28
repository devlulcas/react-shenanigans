import { useEffect, useState } from "react";
import AnimeQuote from "../../components/AnimeQuote";
import Spinner from "../../components/Spinner";
import { Anime } from "../../model/Anime";
import "./styles.css";

export default function AnimePhrase() {
  const [anime, setAnime] = useState<Anime>();

  async function getAnime() {
    const anime = await Anime.getAnimeFromApi();
    setAnime(anime);
  }

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <>
      <section className="blog anime-page">
        {anime ? <AnimeQuote anime={anime} /> : <Spinner />}
      </section>
    </>
  );
}
