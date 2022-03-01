import { useEffect, useState } from "react";
import { Anime } from "../../model/Anime";
import { IAnimeProperties } from "../../model/interface/Anime";
import Spinner from "../Spinner";
import "./styles.css";

const defaultState: IAnimeProperties = {
  englishTitle: "Code Geass: Lelouch of the Rebellion",
  quote:
    "War is merely one method of diplomacy. However, it is the least efficient one.",
  character: "Bismarck Waldstein",
  japoneseTitle: "コードギアス 反逆のルルーシュ",
  startDate: "2006-10-06",
  endDate: "2007-07-29",
  posterImage: "https://media.kitsu.io/anime/poster_images/1415/large.jpg",
  coverImage: "https://media.kitsu.io/anime/cover_images/1415/small.jpg",
};

function AnimeQuote() {
  const [anime, setAnime] = useState<Anime | IAnimeProperties>();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    Anime.getAnimeFromApi().then(anime => setAnime(anime || defaultState))
    setLoading(false);
  }, []);

  if (loading) return <Spinner />;

  return (
    <article className="anime-article">
      <img
        className="cover"
        src={anime?.coverImage}
        alt={anime?.englishTitle}
      />
      <img
        className="poster"
        src={anime?.posterImage}
        alt={anime?.englishTitle}
      />

      <div className="show">
        <h3 className="anime-title">
          {anime?.japoneseTitle}
          <p>{anime?.englishTitle}</p>
        </h3>

        <div className="show-lifetime">
          <time dateTime={anime?.startDate}>
            <span>Start:</span> {anime?.startDate}
          </time>
          <time dateTime={anime?.endDate}>
            <span>End:</span> {anime?.endDate}
          </time>
        </div>

        <blockquote>
          {anime?.quote}
          <p>~ {anime?.character}</p>
        </blockquote>
      </div>
    </article>
  );
}

export default AnimeQuote;
