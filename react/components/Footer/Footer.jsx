import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-50 sticky bottom-0 border-t border-gray-200">
      <div className="w-10/12 md:w-10/12 lg:w-11/12 mx-auto grid grid-cols-1 py-6 sm:grid-cols-3 md:grid-cols-3 sm:gap-5 ">
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:col-span-2">
          <div className="hidden sm:flex sm:flex-row">
            <div className="mr-3">
              <img
                src="/icons/sm-globe.svg"
                alt=""
                className="h-5 w-8 object-contain"
              />
            </div>
            <div>
              <p className="text-sm text-gray-900 font-medium">Free Shipping</p>
              <p className="text-sm text-gray-500 font-normal sm:hidden lg:block">
                Get 2-day free shipping anywhere in North America.
              </p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-row">
            <div className="mr-3">
              <img
                src="/icons/sm-shield-check.svg"
                alt=""
                className="h-5 w-8 object-contain"
              />
            </div>
            <div>
              <p className="text-sm text-gray-900 font-medium">
                2 Year Warranty
              </p>
              <p className="text-sm text-gray-500 font-normal sm:hidden lg:block">
                If anything goes wrong in the first two years, we'll replace it
                for free.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center sm:col-span-2 md:col-span-2 lg:col-span-1">
          <div className="flex flex-col items-end mr-6">
            <p className="text-3xl text-gray-900 font-bold">$2,717</p>
            <p className="text-sm text-gray-500 font-normal hidden sm:block">
              Need a financing?{" "}
              <span className="underline">
                <a> Learn more</a>
              </span>
            </p>
          </div>
          <div>
            <button className="whitespace-pre box-border bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
