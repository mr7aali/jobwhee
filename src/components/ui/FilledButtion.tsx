import React from "react";

const FilledButtion = ({
  bg,
  textColor,
  text,
}: {
  bg: string;
  textColor: string;
  text: string;
}) => {
  return (
    <div
      className={`bg-${bg} text-${textColor} rounded-full inline-block font-medium text-[14px] px-8 py-[14px] cursor-pointer`}
    >
      <span>{text}</span>
    </div>
  );
};

export default FilledButtion;
