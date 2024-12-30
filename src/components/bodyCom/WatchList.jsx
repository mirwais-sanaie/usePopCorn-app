import { useState } from "react";
import OpenedMovie from "./OpenedMovie";

function WatchList({
  selectedMovie,
  setSelectedMovie,
  setSavedMovie,
  savedMovie,
}) {
  const [showPanel, setShowPanel] = useState(true);

  function handleDeleteItem(id) {
    console.log(savedMovie);
    setSavedMovie(savedMovie.filter((item) => item.imdbID !== id));
  }

  return (
    <div className="box lg:w-[26rem] h-full">
      <button
        onClick={() => setShowPanel((showPanel) => !showPanel)}
        className="toggle-show"
      >
        {showPanel ? <span>&#8722;</span> : <span>&#43;</span>}
      </button>

      {showPanel && (
        <>
          {selectedMovie ? (
            <OpenedMovie
              setSelectedMovie={setSelectedMovie}
              selectedMovie={selectedMovie}
              savedMovie={savedMovie}
              setSavedMovie={setSavedMovie}
            />
          ) : (
            <div>
              <div className="summary shadow-xl">
                <h3 className="uppercase font-bold mb-4">Movie You watched</h3>
                <div className="flex lg:space-x-5 space-x-3 text-sm lg:text-base">
                  <p>
                    <span>#️⃣</span>
                    <span>{savedMovie.length} movies</span>
                  </p>
                  <p>
                    <span>⭐️</span>
                    <span>8.50</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>8.50</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>23 min</span>
                  </p>
                </div>
              </div>

              <ul className="list-movie">
                {savedMovie.map((movie) => (
                  <li className="relative" key={movie.imdbID}>
                    <img
                      src={`${movie.Poster}`}
                      className="movie-img-list"
                      alt=""
                    />
                    <div className="flex flex-col text-start ps-5 space-y-2">
                      <h3 className=" text-lg font-bold">{movie.Title}</h3>
                      <div className="flex justify-between">
                        <div className="flex space-x-5 ">
                          <p>
                            <span>⭐️</span>
                            <span>{movie.imdbRating}</span>
                          </p>
                          <p>
                            <span>🌟</span>
                            <span>{movie.userRating}</span>
                          </p>
                          <p>
                            <span>⏳</span>
                            <span>{movie.Runtime}</span>
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteItem(movie.imdbID)}
                          className="btn-delete absolute lg:right-14 right-5"
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default WatchList;
