import { useEffect, useState } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieSearch from './components/MovieSearch';

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [moviePopular, setMoviePopular] = useState([]);
  const [movieXH, setMovieXH] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (search) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=vi&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_APP_KEY}`
        }
      };

      const searchVal = await fetch(url, options);
      const data = await searchVal.json();
      setMovieSearch(data.results);

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_APP_KEY}`
        }
      };

      // call 2 api
      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1';
      // movie rate
      const url2 = 'https://api.themoviedb.org/3/tv/top_rated?language=vi&page=1';
      // movie Popular
      const url3 = 'https://api.themoviedb.org/3/tv/popular?language=vn&page=1';
      // movie
      const url4 = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'

      const [res1, res2, res3, res4] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
        fetch(url3, options),
        fetch(url4, options)
      ])

      const data1 = await res1.json();
      const data2 = await res2.json();
      const data3 = await res3.json();
      const data4 = await res4.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
      setMoviePopular(data3.results);
      setMovieXH(data4.results);
    };

    fetchMovie();
  }, []);

  return (
    <div className='bg-black pb-10'>
      <Header onSearch={handleSearch} />
      <Banner />

      {movieSearch.length > 0 ? (
        <MovieSearch title={'Kết quả tìm kiếm'} data={movieSearch} />
      ) : (
        <>
          <MovieList title={'Phim Xu Hướng'} data={movieXH} />
          <MovieList title={'Phim Hot'} data={movie} />
          <MovieList title={'Phim Đặc Biệt'} data={movieRate} />
          <MovieList title={'Phim Phổ biến'} data={moviePopular} />
        </>
      )}
    </div>
  )
}

export default App
