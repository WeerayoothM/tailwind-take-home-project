import React from "react";

function DetailSpec({ title = "", detail = "" }) {
  return (
    <div className="flex justify-between items-center py-5 border-b border-gray-200 ">
      <p className="text-gray-900 text-sm leading-5 font-medium">{title}</p>
      <p className="text-gray-900 text-sm leading-5 font-normal">{detail}</p>
    </div>
  );
}

export default DetailSpec;
