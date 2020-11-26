import React from "react";
import {
  Featured,
  FeaturedTransparencyVertical,
  FeaturedTransparencyHorizontal,
  FeaturedName,
  FeaturedInfo,
  FeaturedPoints,
  FeaturedYear,
  FeaturedSeasons,
  FeaturedDescription,
  FeaturedButtons,
  FeaturedGenres,
} from "./styles";

function FeaturedMovie({ item }) {

  let firstDate = new Date(item.first_air_date);
  let genres = []
  for(let i in item.genres) {
    genres.push(item.genres[i].name)
  }
  return (
    <Featured
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <FeaturedTransparencyVertical>
        <FeaturedTransparencyHorizontal>
          <FeaturedName>{item.original_name}</FeaturedName>
          <FeaturedInfo>
            <FeaturedPoints>{item.vote_average} pontos</FeaturedPoints>
            <FeaturedYear>{firstDate.getFullYear()}</FeaturedYear>
            <FeaturedSeasons>
              {item.number_of_seasons} temporada
              {item.number_of_seasons > 1 ? "s" : ""}
            </FeaturedSeasons>
          </FeaturedInfo>
          <FeaturedDescription>{item.overview}</FeaturedDescription>
          <FeaturedButtons>
            <a href={`/watch/${item.id}`} className="watch">▶ Assistir</a>
            <a href={`/list/add/${item.id}`} className="list">+ Minha Lista</a>
          </FeaturedButtons>
          <FeaturedGenres>
            <strong>Gêneros: </strong>{genres.join(', ')}
          </FeaturedGenres>
        </FeaturedTransparencyHorizontal>
      </FeaturedTransparencyVertical>
    </Featured>
  );
}

export default FeaturedMovie;
