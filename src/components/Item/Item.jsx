import { useState } from "react";

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <li className="overflow-hidden rounded-2xl bg-salmon px-12 py-8 text-center">
      <span
        className={`mb-10 block text-3xl transition-transform ${
          zoomed ? "scale-[3]" : ""
        }`}
      >
        {emoji}
      </span>
      <button
        className={`w-[120px] cursor-pointer rounded-[5px] border border-solid border-current bg-transparent p-3 text-white transition-colors hover:bg-white hover:text-salmon`}
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Zoom out" : "Zoom in"}
      </button>
    </li>
  );
}
