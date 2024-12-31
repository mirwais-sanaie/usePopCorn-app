function WatchlistSummary({ watchlistStats }) {
  const { totalUserRatings, totalImdbRatings, totalRuntime, count } =
    watchlistStats;

  const avgUserRating = count > 0 ? (totalUserRatings / count).toFixed(1) : 0;
  const avgImdbRating = count > 0 ? (totalImdbRatings / count).toFixed(1) : 0;
  const avgRuntime = count > 0 ? Math.round(totalRuntime / count) : 0;

  return (
    <div className="summary shadow-xl">
      <h3 className="uppercase font-bold mb-4">Movie You watched</h3>
      <div className="flex lg:space-x-5 space-x-3 text-sm lg:text-base">
        <p>
          <span>#️⃣</span>
          <span>{count} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime}</span>
        </p>
      </div>
    </div>
  );
}

export default WatchlistSummary;
