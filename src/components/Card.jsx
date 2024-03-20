import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className="relative text-white w-44 h-52 rounded-[20px] bg-zinc-500 px-5 py-6 overflow-hidden border-2 border-black"
    >
      <FaFileAlt />
      <p className="text-sm">{data.description}</p>
      <div className="flex items-center justify-between absolute footer w-full bottom-0 py-4 left-0 px-3 mb-3">
        <p className="text-xs text-zinc-100">{data.fileSize}</p>
        <span className="w-5 h-5 bg-zinc-700 rounded-full flex items-center justify-center">
          {data.close ? (
            <IoIosCloseCircle />
          ) : (
            <FaDownload size="0.6em" color="white" />
          )}
        </span>
      </div>
      {data.tag.isOpen ? (
        <div
          className={`flex items-center justify-center absolute bottom-0 left-0 ${
            data.tag.color === "blue" ? "bg-blue-500" : "bg-green-500"
          } w-full p-1`}
        >
          <h3 className="text-xs font-semibold">{data.tag.text}</h3>
        </div>
      ) : null}
    </motion.div>
  );
}

export default Card;
