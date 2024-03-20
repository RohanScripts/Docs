import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize: "12MB",
      close: true,
      tag: { isOpen: true, text: "Read More...", color: "green" },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize: "12MB",
      close: true,
      tag: { isOpen: true, text: "Read More...", color: "blue" },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize: "12MB",
      close: true,
      tag: { isOpen: true, text: "Read More...", color: "green" },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize: "12MB",
      close: true,
      tag: { isOpen: true, text: "Read More...", color: "blue" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed left-0 z-[5] w-full h-full flex gap-5 p-5 flex-wrap"
    >
      {data.map((items, index) => (
        <Card data={items} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
