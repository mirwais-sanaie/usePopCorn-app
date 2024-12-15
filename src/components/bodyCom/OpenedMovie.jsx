function OpenedMovie({ setSelectedMovie, selectedMovie }) {
  return (
    <div className="relative">
      <button
        onClick={() => setSelectedMovie(null)}
        className="back-icon absolute left-2 top-2"
      >
        <span>&#8592;</span>
      </button>
      {/* <h1>Hello world ID : {selectedMovie}</h1> */}
      <div className="movie-s-content">
        <img className="opened-img" src="./test.jpg" alt="" />
        <div className="detail-opened">
          <h1 className="font-bold text-2xl mb-7">prison break</h1>
          <p className="mb-2 text-sm">25 Jun 2015 • 119 min</p>
          <p className="mb-2 text-sm">Documentary</p>
          <p className="mb-2 text-sm">⭐️ 8.0 IMDb rating</p>
        </div>
      </div>
    </div>
  );
}

export default OpenedMovie;
