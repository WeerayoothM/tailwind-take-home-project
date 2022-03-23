import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-50 py-6 px-8 grid grid-cols-3 gap-5 border-t border-gray-200 sticky bottom-0 ">
      <div className="flex flex-row ">
        <div className="mr-3">
          <img
            src="/icons/sm-globe.svg"
            alt=""
            className="h-5 w-8 object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-gray-900 font-medium">Free Shipping</p>
          <p className="text-sm text-gray-500 font-normal">
            Get 2-day free shipping anywhere in North America.
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="mr-3">
          <img
            src="/icons/sm-shield-check.svg"
            alt=""
            className="h-5 w-8 object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-gray-900 font-medium">2 Year Warranty</p>
          <p className="text-sm text-gray-500 font-normal">
            If anything goes wrong in the first two years, we'll replace it for
            free.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-end mr-6">
          <p className="text-3xl text-gray-900 font-bold">$2,717</p>
          <p className="text-sm text-gray-500 font-normal ">
            Need financing? Learn more
          </p>
        </div>
        <div>
          <button className="whitespace-pre box-border bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:">
            Buy now
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
