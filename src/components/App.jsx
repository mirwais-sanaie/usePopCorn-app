import MovieList from "./bodyCom/MovieList";
import WatchList from "./bodyCom/WatchList";
import Navbar from "./NavBarCom/Navbar";
import "./App.css";
import { useState } from "react";

function App() {
  const [movieName, setMovieName] = useState("");
  const [resultMoives, setResultMoives] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [savedMovie, setSavedMovie] = useState([]);
  const lengthMovies = resultMoives?.length;

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
        />
      </div>
    </div>
  );
}

export default App;
