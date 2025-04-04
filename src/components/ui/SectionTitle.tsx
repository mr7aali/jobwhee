import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center">
      <div className="relative inline-block">
        <div className="flex items-center gap-2.5 ">
          <div className="h-3.5 w-3.5 rounded-[3px] bg-[#C0D724]"></div>
          <h1 className="uppercase text-3xl text-black font-extrabold">
            {title}
          </h1>
        </div>
        <div className=" h-[5px] w-[39%] rounded-[3px] bg-[#C0D724] bottom-0-0 right-0 absolute"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
