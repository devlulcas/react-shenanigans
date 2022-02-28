import { Anime } from "../../model/Anime";
import "./styles.css";

type AnimeQuoteProps = {
  anime: Anime;
};

function AnimeQuote({ anime }: AnimeQuoteProps) {
  return (
    <article className="anime-article">
      {console.log(anime.coverImage)}

      <img className="cover" src={anime.coverImage} alt={anime.englishTitle} />
      <img
        className="poster"
        src={anime.posterImage}
        alt={anime.englishTitle}
      />

      <div className="show">
        <h3 className="anime-title">
          {anime.japoneseTitle}
          <p>{anime.englishTitle}</p>
        </h3>

        <div className="show-lifetime">
          <time dateTime={anime.startDate}>
            <span>Start:</span> {anime.startDate}
          </time>
          <time dateTime={anime.endDate}>
            <span>End:</span> {anime.endDate}
          </time>
        </div>

        <blockquote>
          {anime.quote}
          <p>~ {anime.character}</p>
        </blockquote>
      </div>
    </article>
  );
}

export default AnimeQuote;
