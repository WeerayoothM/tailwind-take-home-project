import React from "react";

function ImageBox({ src = "", style = "" }) {
  return (
    <div
      tabindex="0"
      className={`w-full rounded-lg border border-gray-200 hover:border-gray-400 focus:border-transparent focus:shadow-outline-gray ${style}`}
    >
      <img src={src} alt={src.split(".")[0]} className="w-full rounded-lg  " />
    </div>
  );
}

export default ImageBox;
