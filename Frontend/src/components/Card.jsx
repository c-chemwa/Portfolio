import { useState, useEffect, useRef } from "react";

export default function Card({
  images = [],
  alt = "",
  title,
  description,
  position = "center", // "left" | "center" | "right"
  isFront = false, // hovered
  isActive = false, // center (clicked)
  onHover = () => {},
  onLeave = () => {},
  onClick = () => {},
}) {
  const [hover, setHover] = useState(false);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // Slideshow
  useEffect(() => {
    if (!(hover || isActive) || images.length < 2) return;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % images.length);
    }, 1700);
    return () => clearInterval(intervalRef.current);
  }, [hover, isActive, images.length]);

  useEffect(() => {
    if (!(hover || isActive)) setCurrent(0);
  }, [hover, isActive]);

  // Style based on position/state
  let style = {};
  let z = 10;
  if (position === "center") {
    style = {
      transform: "scale(1.15) rotateY(0deg)",
      width: "30vw", minWidth: 240, maxWidth: 430, height: "60vh",
      boxShadow: "0 16px 60px 0 rgba(0,0,0,0.45)",
      transition: "all 0.5s cubic-bezier(.42,0,.58,1)",
    };
    z = isFront ? 40 : 30;
  } else if (position === "left") {
    style = {
      transform: "scale(0.88) rotateY(24deg) translateX(-13vw)",
      width: "22vw", minWidth: 160, maxWidth: 300, height: "54vh",
      filter: "brightness(0.7) blur(1px)",
      opacity: 0.7,
      transition: "all 0.5s cubic-bezier(.42,0,.58,1)",
    };
    z = isFront ? 50 : 20;
  } else if (position === "right") {
    style = {
      transform: "scale(0.88) rotateY(-24deg) translateX(13vw)",
      width: "22vw", minWidth: 160, maxWidth: 300, height: "54vh",
      filter: "brightness(0.7) blur(1px)",
      opacity: 0.7,
      transition: "all 0.5s cubic-bezier(.42,0,.58,1)",
    };
    z = isFront ? 50 : 20;
  }

  return (
    <div
      className="transition-all duration-500 ease-in-out rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center justify-center cursor-pointer relative mx-[-5vw]"
      style={{
        background: "rgba(30,30,40,0.97)",
        zIndex: z,
        ...style,
      }}
      onMouseEnter={() => { setHover(true); onHover(); }}
      onMouseLeave={() => { setHover(false); onLeave(); }}
      onClick={() => { if (!isActive) onClick(); }}
      tabIndex={0}
      aria-label={title}
    >
      {/* Slideshow Image */}
      {images.length > 0 && (
        <img
          src={images[hover || isActive ? current : 0]}
          alt={alt}
          className="object-cover w-full h-full transition-all duration-700"
          draggable={false}
        />
      )}

      {/* Overlay title (centered, fades on hover/active) */}
      <span
        className={`absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white drop-shadow-lg pointer-events-none transition-all duration-500 ${
          hover || isActive ? "opacity-0" : "opacity-100"
        }`}
      >
        {title}
      </span>
      {(hover || isActive) && (
        <div className="absolute bottom-4 left-0 w-full flex justify-center pointer-events-none">
          <span className="bg-black/60 px-4 py-2 rounded-xl text-white text-2xl font-bold shadow-lg">
            {title}
          </span>
        </div>
      )}
      {/* Arrows (show only on hover/active and if more than 1 image) */}
      {(hover || isActive) && images.length > 1 && (
        <>
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full z-50"
            onClick={e => {
              e.preventDefault(); e.stopPropagation();
              setCurrent(c => (c - 1 + images.length) % images.length);
            }}
            tabIndex={-1}
            aria-label="Previous image"
            type="button"
          >
            &lt;
          </button>
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full z-50"
            onClick={e => {
              e.preventDefault(); e.stopPropagation();
              setCurrent(c => (c + 1) % images.length);
            }}
            tabIndex={-1}
            aria-label="Next image"
            type="button"
          >
            &gt;
          </button>
        </>
      )}
      {isActive && (
        <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-6 pb-8 text-lg md:text-xl rounded-b-3xl z-50 transition-all duration-500">
          {description}
        </div>
      )}
    </div>
  );
}