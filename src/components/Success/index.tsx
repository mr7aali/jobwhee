import React from "react";
import SectionTitle from "../ui/SectionTitle";

const Success = () => {
  return (
    <div className=" my-14">
      <SectionTitle title="Success" />

      <div className="bg-white flex justify-between w-[297px] rounded-full text-[#18470D] text-[18px] py-1 pr-1">
        <span className="w-full text-center py-3 font-medium">Client</span>
        <span className="bg-[#CBEC5E] w-full text-center rounded-full py-3 font-medium">
          Talent
        </span>
      </div>
    </div>
  );
};

export default Success;
