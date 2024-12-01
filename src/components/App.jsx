import MovieList from "./bodyCom/MovieList";
import WatchList from "./bodyCom/WatchList";
import Navbar from "./NavBarCom/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main flex flex-col lg:flex-row lg:justify-center mx-3 mt-9 lg:mx-0 lg:mt-0 lg:space-x-7 space-y-7 lg:space-y-0 text-center ">
        <MovieList />
        <WatchList />
      </div>
    </div>
  );
}

export default App;
