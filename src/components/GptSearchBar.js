import React from "react";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <>
      <div className="flex justify-center pt-[10%]">
        <form className="bg-black grid grid-cols-12 w-1/2 p-4 rounded-md">
          <input
            type="text"
            className="px-4 py-2 outline-none bg-gray-200 rounded-l-md 
            font-semibold col-span-8"
            placeholder={lang.hindi.gptSearchPlaceholder}
          />
          <button className="bg-red-700 rounded-r-md text-white font-semibold col-span-4">
            {lang.hindi.search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
