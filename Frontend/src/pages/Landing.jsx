import { useState } from "react";
import Card from "../components/Card";

const CARDS = [
  {
    key: "uiux",
    title: "UI/UX",
    description: "User interface & experience projects, case studies, and prototypes.",
    images: ["/uiux1.jpg", "/uiux2.jpg", "/uiux3.jpg"],
  },
  {
    key: "music",
    title: "Music",
    description: "Music production, compositions, and collaborations.",
    images: ["/music1.jpg", "/music2.jpg", "/music3.jpg"],
  },
  {
    key: "film",
    title: "Film",
    description: "Short films, video projects, and creative storytelling.",
    images: ["/film1.jpg", "/film2.jpg", "/film3.jpg"],
  },
];

// Cyclically shift array left by n
function shiftArray(arr, n) {
  const len = arr.length;
  const shift = ((n % len) + len) % len;
  return arr.slice(shift).concat(arr.slice(0, shift));
}

export default function Landing() {
  // This is the index in CARDS that is currently at center (active)
  const [centerIdx, setCenterIdx] = useState(1); // "music" starts at center
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Arrange: left, center, right
  const ordered = shiftArray(CARDS, centerIdx);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-gray-700 overflow-x-hidden">
      <div className="flex flex-row justify-center items-center gap-0 relative select-none">
        {ordered.map((card, pos) => {
          // pos: 0 (left), 1 (center), 2 (right)
          // Map back to original card index for z-index-on-hover
          const globalIdx = (centerIdx + pos) % 3;
          return (
            <Card
              key={card.key}
              title={card.title}
              description={card.description}
              images={card.images}
              position={pos === 0 ? "left" : pos === 1 ? "center" : "right"}
              isFront={hoveredIdx === globalIdx}
              isActive={pos === 1}
              onHover={() => setHoveredIdx(globalIdx)}
              onLeave={() => setHoveredIdx(null)}
              onClick={() => setCenterIdx(globalIdx)}
            />
          );
        })}
      </div>
    </div>
  );
}