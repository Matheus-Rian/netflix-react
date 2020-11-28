import React from "react";
import './movieRow.css'
import { MovieRowListArea, MovieRowList, MovieRowItem } from "./styles";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function MovieRow({ title, items }) {
  return (
    <div className='movieRowContainer'>
      <h2>{title}</h2>

      <div className='navigateLeft'>
        <NavigateBeforeIcon style={{fontSize:50}}/>
      </div>

      <div className='navigateRight'>
        <NavigateNextIcon style={{fontSize:50}}/>
      </div>

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
    </div>
  );
}
export default MovieRow;
