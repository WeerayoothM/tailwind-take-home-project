import React from "react";
import ImageBox from "./ImageBox";

function ImageDisplay() {
  return (
    <div className="w-full">
      <ImageBox src={"/img/head-black_front.png"} />
      <div className="grid grid-cols-3 gap-4 mt-3">
        <ImageBox src={"/img/head-black_front.png"} />
        <ImageBox src={"/img/head-black_front-side-left.png"} />
        <ImageBox src={"/img/powerhead_back.png"} />
      </div>
    </div>
  );
}

export default ImageDisplay;
