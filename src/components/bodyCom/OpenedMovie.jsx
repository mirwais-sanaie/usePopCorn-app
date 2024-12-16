function OpenedMovie({ setSelectedMovie, selectedMovie, resultMoives }) {
  return (
    <div className="relative">
      <button
        onClick={() => setSelectedMovie(null)}
        className="back-icon absolute left-2 top-2"
      >
        <span>&#8592;</span>
      </button>
      {/* <h1>Hello world ID : {selectedMovie}</h1> */}
      {resultMoives.map((movie) =>
        selectedMovie === movie.imdbID ? (
          <div className="movie-s-content" key={movie.imdbID}>
            <img className="opened-img" src={`${movie.Poster}`} alt="" />
            <div className="detail-opened py-3">
              <h1 className="font-bold text-xl mb-7">{movie.Title}</h1>
              <p className="mb-3 text-sm">25 Jun 2015 • 119 min</p>
              <p className="mb-3 text-sm">Documentary</p>
              <p className="mb-3 text-sm">⭐️ 8.0 IMDb rating</p>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default OpenedMovie;
