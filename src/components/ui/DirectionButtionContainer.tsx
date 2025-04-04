import IconCircleDirection from "@/svg-icons/IconCircleDirection";
import React from "react";

const DirectionButtionContainer = () => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-6">
        <span className="inline-block rotate-180">
          <IconCircleDirection />
        </span>
        <span>
          <IconCircleDirection />
        </span>
      </div>
    </div>
  );
};

export default DirectionButtionContainer;
