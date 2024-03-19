import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className=" text-zinc-500 py-10 flex justify-center font-semibold text-xl">
          Documents...
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-400 text-9xl font-semibold">
          Docs
        </h1>
      </div>
    </>
  );
};

export default Background;
