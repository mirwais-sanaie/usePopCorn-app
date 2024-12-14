import Logo from "./Logo";
import SearchBar from "./SearchBar";
import "./Nav.css";

export default function NavBar({ movieName, setMovieName, lengthMovies }) {
  return (
    <nav className="container mx-auto grid grid-cols-1 lg:grid-cols-3 space-y-5 lg:space-y-0 items-center bg-lightViolet my-6 px-6 py-5 md:rounded-lg">
      <Logo />
      <SearchBar movieName={movieName} setMovieName={setMovieName} />
      <p className="ms-auto lg:text-xl font-bold lg:font-normal">
        Found {lengthMovies ? lengthMovies : "0"} result
      </p>
    </nav>
  );
}
