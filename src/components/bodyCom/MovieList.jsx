function MovieList() {
  return (
    <div className="box lg:w-[26rem] h-full">
      <button className="toggle-show">&#8722;</button>
      <ul className="list-movie">
        <li>
          <img src="./test.jpg" className="movie-img-list" alt="" />
          <div className="flex flex-col text-start ps-5 space-y-2">
            <h3 className=" text-lg font-bold">Title of movie</h3>
            <p>
              <span>🗓</span> 2016
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MovieList;
