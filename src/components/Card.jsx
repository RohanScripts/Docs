import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

function Card() {
  return (
    <div className="relative text-white w-44 h-52 rounded-[20px] bg-zinc-500 px-5 py-6 overflow-hidden">
      <FaFileAlt />
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex items-center justify-between absolute footer w-full bottom-0 py-4 left-0 px-3 mb-3">
        <p className="text-xs text-zinc-100">Read More</p>
        <span className="w-5 h-5 bg-zinc-700 rounded-full flex items-center justify-center">
          <FaDownload size="0.6em" color="white" />
        </span>
      </div>
      <div className="flex items-center justify-center absolute bottom-0 left-0 bg-green-500 w-full p-1">
        <h3 className="text-xs font-semibold">Download Now...</h3>
      </div>
    </div>
  );
}

export default Card;
