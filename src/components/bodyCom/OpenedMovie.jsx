import { useEffect, useState } from "react";
import StarRating from "./StarRating";

function OpenedMovie({
  setSelectedMovie,
  selectedMovie,
  setSavedMovie,
  savedMovie,
  userRatings,
  setWatchlistStats,
}) {
  const [movieDetail, setMoiveDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeStar, setActiveStar] = useState(0);

  const isMovieSaved = savedMovie.some(
    (saved) => saved.imdbID === movieDetail?.imdbID
  );

  function handleSaveMovie(movie) {
    if (!isMovieSaved) {
      const movieWithRating = { ...movie, userRating: activeStar };
      setSavedMovie([...savedMovie, movieWithRating]);
      setSelectedMovie(null);

      setWatchlistStats((previousStats) => ({
        totalUserRating: previousStats.totalUserRatings + activeStar,
        totalImdbRatings:
          previousStats.totalImdbRatings + parseFloat(movie.imdbRating),
        totalRuntime: previousStats.totalRuntime + parseInt(movie.Runtime),
        count: previousStats.count + 1,
      }));
      setActiveStar(0);
    }
  }

  useEffect(
    function () {
      if (!selectedMovie) return;
      async function getFullDetail() {
        try {
          setLoading(true);
          setActiveStar(0);
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=f84fc31d&i=${selectedMovie}`
          );
          const data = await response.json();
          setMoiveDetail(data);
          setLoading(false);
        } catch (err) {
          console.log(err.message);
        }
      }

      getFullDetail();
    },
    [selectedMovie]
  );

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setSelectedMovie(null)}
        className="back-icon absolute left-1 top-1"
      >
        <span>&#8592;</span>
      </button>

      <div className="movie-s-content">
        <img
          className="opened-img"
          src={`${movieDetail.Poster}`}
          alt="not found"
        />
        <div className="detail-opened py-3">
          <h1 className="font-bold text-xl mb-7">{movieDetail.Title}</h1>
          <p className="mb-3 text-sm">
            {movieDetail.Released} - {movieDetail.Runtime}
          </p>
          <p className="mb-3 text-sm">{movieDetail.Genre}</p>
          <p className="mb-3 text-sm">
            ⭐️ {movieDetail.imdbRating} IMDb rating
          </p>
        </div>
      </div>
      <div className="movie-b-content grid gap-y-4 text-sm py-10 px-8 text-[#DEE2CA] text-left">
        {/* stars components  */}
        <div className="bg-[#343A40] p-5 rounded-lg">
          {isMovieSaved && (
            <p>
              You rated
              {savedMovie.map((el) =>
                el.imdbID === selectedMovie ? ` - 🌟${el.userRating} - ` : null
              )}
              this movie before
            </p> //notice here
          )}

          {!isMovieSaved && (
            <StarRating
              size={10}
              activeStar={activeStar}
              setActiveStar={setActiveStar}
            />
          )}

          {!isMovieSaved && activeStar !== 0 && (
            <button
              className="btn-add"
              onClick={() => handleSaveMovie(movieDetail)}
            >
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
              Add to list
            </button>
          )}
        </div>

        <p>{movieDetail.Plot}</p>
        <p>Actors : {movieDetail.Actors}</p>
        <p>
          {movieDetail.Director !== "N/A"
            ? `Directed by :${movieDetail.Director}`
            : null}
        </p>
      </div>
    </div>
  );
}

export default OpenedMovie;
