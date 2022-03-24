import React from "react";

function DetailBox({ title = "", body = "", style = "", addOnPrice = "" }) {
  return (
    <div
      className={`flex justify-between items-center border rounded-lg border-gray-300 p-5 hover:border-gray-400 ${style}`}
    >
      <div className="w-full flex flex-col h-full">
        <p className="text-sm text-gray-900 leading-5 font-medium">{title}</p>
        {body && (
          <p className="text-sm text-gray-500 leading-5 mt-2 font-normal">
            {body}
          </p>
        )}
      </div>
      {addOnPrice && (
        <div className="text-sm text-gray-900 leading-5 ml-2 whitespace-pre font-normal">
          {`+ $${addOnPrice}`}
        </div>
      )}
    </div>
  );
}

export default DetailBox;
