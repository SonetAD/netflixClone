import React, { useEffect, useState } from 'react';
import endPoints from '../endPoints';
import Overview from './Overview.home';

export default function Main() {
  const [movies, setMovies] = useState([]);
  const { trending } = endPoints;

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  console.log(randomMovie);

  useEffect(() => {
    trending().then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <div className="  z-0 w-full h-[500px] text-white">
      <div className="w-fulll h-full">
        <div className="w-full h-[500px] bg-gradient-to-r from-black absolute" />
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
        />
      </div>
      <div className="grid place-items-center absolute w-full top-[30%] sm:place-items-start">
        <h1 className="font-bold text-2xl md:text-3xl mb-5">
          {randomMovie?.title}
        </h1>
        <div>
          <button
            type="button"
            className="bg-gray-300 border border-gray-300 text-black px-10 py-1 font-bold rounded"
          >
            Play
          </button>

          <button
            type="button"
            className="mx-1 border border-gray-400 text-white font-bold px-3 py-1 rounded"
          >
            Watch Latter
          </button>
        </div>
        <p className="font-bold py-2 text-sm">
          Release:{' '}
          <span className="font-light italic text-yellow-50">
            {randomMovie?.release_date}
          </span>
        </p>
        <Overview overview={randomMovie ? randomMovie.overview : ''} />
      </div>
    </div>
  );
}
