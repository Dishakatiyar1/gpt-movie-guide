import React from "react";
import {FaPlay} from "react-icons/fa";
import {CiCircleAlert} from "react-icons/ci";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold"> {title} </h1>
      <p className="py-6 text-lg w-1/3"> {overview} </p>
      <div className="flex gap-4">
        <button className="flex gap-1 items-center bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-opacity-75">
          <FaPlay /> Play
        </button>
        <button className="flex gap-1 items-center bg-gray-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-opacity-80">
          <span className="text-xl">
            {" "}
            <CiCircleAlert />{" "}
          </span>{" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
