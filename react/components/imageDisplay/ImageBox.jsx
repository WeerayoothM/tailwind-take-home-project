import React from "react";

function ImageBox({ src = "", style = {}, onClick = () => {} }) {
  return (
    <div
      // tabIndex="0"
      className={`w-full rounded-lg border border-gray-200 hover:border-gray-400 focus:border-transparent focus:shadow-outline-gray`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src={src} alt={src.split(".")[0]} className="w-full rounded-lg  " />
    </div>
  );
}

export default ImageBox;
