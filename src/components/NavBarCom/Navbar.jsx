import Logo from "./Logo";
import SearchBar from "./SearchBar";
import "./Nav.css";

export default function NavBar() {
  return (
    <nav className="container mx-auto grid grid-cols-1 lg:grid-cols-3 space-y-5 lg:space-y-0 items-center bg-lightViolet my-6 px-6 py-5 md:rounded-lg">
      <Logo />
      <SearchBar />
      <p className="ms-auto lg:text-xl font-bold lg:font-normal">
        Found X result
      </p>
    </nav>
  );
}
