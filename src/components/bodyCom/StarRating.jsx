import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ size = 10 }) {
  const [hovering, setHovering] = useState(0);
  const [onMouseOver, setOnMouseOver] = useState(false);
  const [activeStar, setActiveStar] = useState(0);

  return (
    <div
      onMouseLeave={() => setOnMouseOver((onMouseOver) => !onMouseOver)}
      onMouseEnter={() => setOnMouseOver((onMouseOver) => !onMouseOver)}
      className="flex gap-x-4"
    >
      <span className="flex justify-center gap-x-1">
        {Array.from({ length: size }, (_, i) => {
          return (
            <FaStar
              onMouseOver={() => {
                setHovering((hovering) => (hovering = i + 1));
              }}
              onClick={() =>
                setActiveStar((activeStar) => (activeStar = i + 1))
              }
              key={i}
              size={21}
              fill={onMouseOver && i <= hovering - 1 ? "#fcc419" : "none"}
              style={{
                stroke: "#fcc419", // Border color
                strokeWidth: "30",
                cursor: "pointer",
              }}
            />
          );
        })}
      </span>
      <span className="font-semibold text-[17px] text-[#fcc419]">
        {onMouseOver ? hovering : null}
      </span>
    </div>
  );
}

export default StarRating;
