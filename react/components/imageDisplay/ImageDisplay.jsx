import React from "react";
import ImageBox from "./ImageBox";

function ImageDisplay() {
  return (
    <div className="h-full relative">
      <div className="md:sticky w-full inset-0 top-8">
        <ImageBox src={"/img/head-black_front.png"} />
        <div className="grid grid-cols-3 gap-4 mt-3">
          <ImageBox src={"/img/head-black_front.png"} />
          <ImageBox src={"/img/head-black_front-side-left.png"} />
          <ImageBox src={"/img/powerhead_back.png"} />
        </div>
      </div>
    </div>
  );
}

export default ImageDisplay;
