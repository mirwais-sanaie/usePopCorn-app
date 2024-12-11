import { useEffect, useState } from "react";

function MovieList({ movieName }) {
  const [showPanel, setShowPanel] = useState(true);
  const [resultMoives, setResultMoives] = useState([]);
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
          console.log(data.Search);
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
    [movieName]
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
            <li key={movie.imdbID} className="hover-effect">
              <img src={`${movie.Poster}`} className="movie-img-list" alt="" />
              <div className="flex flex-col text-start ps-5 space-y-2">
                <h2 className=" text-lg font-bold">{movie.Title}</h2>
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
