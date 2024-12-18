import { useEffect, useState } from "react";
import StarRating from "./StarRating";

function OpenedMovie({ setSelectedMovie, selectedMovie }) {
  const [movieDetail, setMoiveDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function getFullDetail() {
        try {
          setLoading(true);
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=f84fc31d&i=${selectedMovie}`
          );
          const data = await response.json();
          setMoiveDetail(data);
          console.log(data);
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
      {/* <h1>Hello world ID : {selectedMovie}</h1> */}

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
        <div>
          <StarRating />
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
