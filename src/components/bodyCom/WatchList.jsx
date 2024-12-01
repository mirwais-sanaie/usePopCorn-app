function WatchList() {
  return (
    <div className="box lg:w-[26rem] h-full">
      <button className="toggle-show">&#8722;</button>

      <div className="summary shadow-xl">
        <h3 className="uppercase font-bold mb-4">Movie You watched</h3>
        <div className="flex space-x-5">
          <p>
            <span>#️⃣</span>
            <span>2 movies</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>8.50</span>
          </p>
          <p>
            <span>🌟</span>
            <span>8.50</span>
          </p>
          <p>
            <span>⏳</span>
            <span>23 min</span>
          </p>
        </div>
      </div>

      <ul className="list-movie">
        <li className="relative">
          <img src="./test.jpg" className="movie-img-list" alt="" />
          <div className="flex flex-col text-start ps-5 space-y-2">
            <h3 className=" text-lg font-bold">Title of movie</h3>
            <div className="flex justify-between">
              <div className="flex space-x-5 ">
                <p>
                  <span>⭐️</span>
                  <span>8.50</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>8.50</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>23 min</span>
                </p>
              </div>
              <button class="btn-delete absolute right-14">X</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WatchList;
