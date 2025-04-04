import React from "react";

const RightBackdrop = () => {
  return (
    <div
      style={{
        height: "191px",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 85% 100%, 0% 1000%)",

        backdropFilter: "blur(35px)",
        borderRadius: "28px",
      }}
      className="absolute top-10 left-10 py-[35px] px-[28px]"
    >
      <span className="text-white text-[40px] font-extrabold leading-[50px] uppercase">
        Find the <span className="text-[#CBEC5E] cursor-pointer">talent</span>{" "}
        sign up <br /> & get The{" "}
        <span className="text-[#CBEC5E] cursor-pointer">job</span> done
      </span>
    </div>
  );
};

export default RightBackdrop;
