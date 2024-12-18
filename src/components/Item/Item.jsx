import { useState } from "react";

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <li className="bg-salmon py-8 px-12 rounded-2xl text-center overflow-hidden">
      <span
        className={`block mb-10 text-3xl transition-transform ${
          zoomed ? "scale-[3]" : ""
        }`}
      >
        {emoji}
      </span>
      <button
        className={`bg-transparent border border-solid border-current p-3 rounded-[5px] cursor-pointer w-[120px] text-white transition-colors hover:text-salmon hover:bg-white`}
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Zoom out" : "Zoom in"}
      </button>
    </li>
  );
}
