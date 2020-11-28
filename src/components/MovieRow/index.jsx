import React, {useState} from "react";
import './movieRow.css'
import { MovieRowListArea, MovieRowItem } from "./styles";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function MovieRow({ title, items }) {

  const [scrollX, setScrollX] = useState(0)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if(x > 0)  x = 0 
    setScrollX(x)
  }
  
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = items.results.length * 150
    if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
    }
    setScrollX(x)
  }

  return (
    <div className='movieRowContainer'>
      <h2>{title}</h2>

      <div className='navigateLeft' onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize:50}}/>
      </div>

      <div className='navigateRight' onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize:50}}/>
      </div>

      <MovieRowListArea>
        <div className="movieRowList" style={{
          marginLeft: scrollX,
          width: items.results.length * 150,
        }}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <MovieRowItem key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </MovieRowItem>
            ))}
        </div>
      </MovieRowListArea>
    </div>
  );
}
export default MovieRow;
