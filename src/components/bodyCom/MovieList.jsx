import { useEffect, useState } from "react";

function MovieList({
  movieName,
  resultMoives,
  setResultMoives,
  setSelectedMovie,
}) {
  const [showPanel, setShowPanel] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const key = "f84fc31d";

  //fetch(`http://www.omdbapi.com/?apikey=${key}&s=interstellar`)

  useEffect(
    function () {
      async function getData() {
        try {
          setLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${movieName}`
          );
          const data = await res.json();
          setResultMoives(data.Search);
          setLoading(false);
        } catch (error) {
          setError(error);
          console.log(error);
        }
      }

      if (movieName.length < 3) {
        setResultMoives([]);
        return;
      }

      getData();
    },
    [movieName, setResultMoives]
  );

  return (
    <div className="box lg:w-[26rem] h-full">
      <button
        onClick={() => setShowPanel((showPanel) => !showPanel)}
        className="toggle-show"
      >
        {showPanel ? <span>&#8722;</span> : <span>&#43;</span>}
      </button>
      {error && <div>{error.message}</div>}

      {loading && (
        <div>
          <h1 className="loading">Loading ...</h1>
        </div>
      )}

      {showPanel && !loading && (
        <ul className="list-movie">
          {resultMoives?.map((movie) => (
            <li
              onClick={() => setSelectedMovie(movie.imdbID)}
              key={movie.imdbID}
              className="hover-effect"
            >
              <img
                src={`${movie.Poster}`}
                className="movie-img-list"
                alt={
                  movie.Poster !== "N/A"
                    ? `Poster for ${movie.Title}`
                    : `No image`
                }
              />
              <div className="flex flex-col text-start ps-5 space-y-2">
                <p className="text-lg font-bold">{movie.Title}</p>
                <p>
                  <span>🗓</span> {movie.Year}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
