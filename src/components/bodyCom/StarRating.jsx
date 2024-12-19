import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ size = 10 }) {
  const [hovering, setHovering] = useState(0);

  return (
    <div className="flex gap-x-4">
      <span className="flex justify-center gap-x-1">
        {Array.from({ length: size }, (_, i) => {
          return (
            <FaStar
              onMouseOver={() => setHovering((hovering) => (hovering = i + 1))}
              key={i}
              size={21}
              fill="none"
              style={{
                stroke: "#fcc419", // Border color
                strokeWidth: "30", // Border thickness
              }}
            />
          );
        })}
      </span>
      <span className="font-semibold text-[17px] text-[#fcc419]">
        {hovering}
      </span>
    </div>
  );
}

export default StarRating;
