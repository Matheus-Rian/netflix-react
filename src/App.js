import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

function App() {
  const [movieList, setMovieList] = useState([]); //Vai iniciar com um [] vazio
  const [featuredData, setFeaturedData] = useState(null);

  //useEffect: Quando a tela for carregada ele vai executar a function useEffect()
  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o Featured(Filme em destaque)
      let originals = list.filter(i => i.slug === 'originals' )
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)

    };

    loadAll();
  }, []);

  return (
    <div className="page">
      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {/* Toda vez que eu tiver um loop tenho que colocar um key */}
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
