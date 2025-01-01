import MovieList from "./bodyCom/MovieList";
import WatchList from "./bodyCom/WatchList";
import Navbar from "./NavBarCom/Navbar";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [movieName, setMovieName] = useState("");
  const [resultMoives, setResultMoives] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [savedMovie, setSavedMovie] = useState(() => {
    const saved = localStorage.getItem("savedMovies");
    return saved ? JSON.parse(saved) : [];
  });
  const [watchlistStats, setWatchlistStats] = useState(() => {
    const stats = localStorage.getItem("watchlistStats");
    return stats
      ? JSON.parse(stats)
      : {
          totalUserRatings: 0,
          totalImdbRatings: 0,
          totalRuntime: 0,
          count: 0,
        };
  });
  const lengthMovies = resultMoives?.length;

  // Save savedMovie to localStorage
  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovie));
  }, [savedMovie]);

  // Save watchlistStats to localStorage
  useEffect(() => {
    localStorage.setItem("watchlistStats", JSON.stringify(watchlistStats));
  }, [watchlistStats]);

  return (
    <div>
      <Navbar
        lengthMovies={lengthMovies}
        movieName={movieName}
        setMovieName={setMovieName}
      />
      <div className="main flex flex-col lg:flex-row lg:justify-center mx-3 mt-9 lg:mx-0 lg:mt-0 lg:space-x-7 space-y-7 lg:space-y-0 text-center ">
        <MovieList
          movieName={movieName}
          resultMoives={resultMoives}
          setResultMoives={setResultMoives}
          setSelectedMovie={setSelectedMovie}
        />
        <WatchList
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          savedMovie={savedMovie}
          setSavedMovie={setSavedMovie}
          setWatchlistStats={setWatchlistStats}
          watchlistStats={watchlistStats}
        />
      </div>
    </div>
  );
}

export default App;
