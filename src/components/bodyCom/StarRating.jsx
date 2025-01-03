import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ size = 10, activeStar, setActiveStar }) {
  const [hovering, setHovering] = useState(0);
  const [onMouseOver, setOnMouseOver] = useState(false);

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
              onMouseEnter={() => {
                setHovering((hovering) => (hovering = i + 1));
              }}
              onMouseLeave={() => {
                setHovering((hovering) => (hovering = 0));
              }}
              onClick={() =>
                setActiveStar((activeStar) => (activeStar = i + 1))
              }
              key={i}
              size={21}
              fill={
                onMouseOver && i < hovering
                  ? "#fcc419"
                  : !onMouseOver && i < activeStar
                  ? "#fcc419"
                  : "transparent"
              }
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
        {hovering === 0 && activeStar === 0
          ? null
          : onMouseOver
          ? hovering
          : activeStar}
        {}
      </span>
    </div>
  );
}

export default StarRating;
