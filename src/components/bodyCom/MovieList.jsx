import { useEffect, useState } from "react";

function MovieList({ movieName }) {
  const [showPanel, setShowPanel] = useState(true);
  const [resultMoives, setResultMoives] = useState([]);

  const key = "f84fc31d";

  //fetch(`http://www.omdbapi.com/?apikey=${key}&s=interstellar`)

  useEffect(
    function () {
      async function getData() {
        try {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${movieName}`
          );
          const data = await res.json();
          console.log(data.Search);
          setResultMoives([data.Search]);
          console.log(resultMoives);
        } catch (e) {
          console.log(e);
        }
      }
      getData();
    },
    [movieName]
  );

  return (
    <div className="box lg:w-[26rem] h-full">
      <button
        onClick={() => setShowPanel((showPanel) => !showPanel)}
        className="toggle-show"
      >
        {showPanel ? <span>&#8722;</span> : <span>&#43;</span>}
      </button>
      {showPanel && (
        <ul className="list-movie">
          {resultMoives.map((movie) => (
            <li>
              {/* <img src="./test.jpg" className="movie-img-list" alt="" /> */}
              <div className="flex flex-col text-start ps-5 space-y-2">
                <h3 className=" text-lg font-bold">Title of movie</h3>
                <p>
                  <span>🗓</span> 2016
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
