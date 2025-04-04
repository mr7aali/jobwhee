import React from "react";

const OutlineBtn = ({
  text,
  isTransparent,
}: {
  text: string;
  isTransparent: boolean;
}) => {
  return (
    <button
      className={`${
        isTransparent ? "bg-white text-black" : "bg-black text-white"
      } cursor-pointer  rounded-full px-9 py-3.5 border border-solid border-[#94949480]  text-sm font-medium`}
    >
      {text}
    </button>
  );
};

export default OutlineBtn;
