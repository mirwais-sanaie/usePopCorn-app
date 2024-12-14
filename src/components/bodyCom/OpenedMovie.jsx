function OpenedMovie({ setSelectedMovie, selectedMovie }) {
  return (
    <div>
      <button onClick={() => setSelectedMovie(null)} className="back-icon">
        <span>&#8592;</span>
      </button>
      <h1>Hello world ID : {selectedMovie}</h1>
    </div>
  );
}

export default OpenedMovie;
