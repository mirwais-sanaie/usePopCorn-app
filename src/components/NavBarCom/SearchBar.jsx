function SearchBar({ movieName, setMovieName }) {
  return (
    <input
      className="rounded-lg px-4 py-3 lg:py-2 text-lg bg-[#7950F2] outline-none focus:-translate-y-0.5 focus:shadow-xl duration-300"
      type="text"
      placeholder="Search movies..."
      value={movieName}
      onChange={(e) => setMovieName(e.target.value)}
    />
  );
}

export default SearchBar;
