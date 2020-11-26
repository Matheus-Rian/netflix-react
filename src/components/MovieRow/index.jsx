import React from "react";
import { MovieRowListArea, MovieRowList, MovieRowItem, MovieRowContainer } from "./styles";

function MovieRow({ title, items }) {
  return (
    <MovieRowContainer>
      <h2>{title}</h2>
      <MovieRowListArea>
        <MovieRowList>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <MovieRowItem key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </MovieRowItem>
            ))}
        </MovieRowList>
      </MovieRowListArea>
    </MovieRowContainer>
  );
}
export default MovieRow;
