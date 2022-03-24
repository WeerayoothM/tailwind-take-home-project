import React from "react";
import { useProduct } from "../../contexts/productContext";
import ImageBox from "./ImageBox";

function ImageDisplay() {
  const { state, dispatch } = useProduct();

  return (
    <div className="h-full relative">
      <div className="md:sticky w-full inset-0 top-8 border-gray-400">
        <ImageBox src={state.photos[state.photoSelectedIndex]} />
        <div className="grid grid-cols-3 gap-4 mt-3">
          {state.photos.map((src, index) => {
            const active = state.photoSelectedIndex === index;
            const style = active
              ? { borderWidth: "2px", borderColor: "#9fa6b2" }
              : "";
            return (
              <ImageBox
                key={src}
                src={src}
                style={style}
                onClick={() =>
                  dispatch({
                    type: "selectPhoto",
                    payload: { selectedIndex: index },
                  })
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ImageDisplay;
