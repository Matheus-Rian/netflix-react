const API_KEY = '107ffb6a281766739f3a422baef89b42';
const API_BASE = 'https://api.themoviedb.org/3';

/* 
- Originais da netflix
- Recomendados (trending)
- Em alta (top rated)
- Ação
- Comédia
- Terror
- Romance
- Documentários

*/

//Requisição com fetch
const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = req.json()
  return json
}

// Pegar as informações para mostrar na tela
 // eslint-disable-next-line 
export default {
  getHomeList: async function () {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      }
    ];
  },
  getMovieInfo: async (movieId, type) => {
      let info = {};

      if(movieId){
          switch(type) {
            case 'movie':
              info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
            break;

            case 'tv':
              info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
            break;

            default: 
              info = null
            break;
          }
      }

      return info;
  }
}