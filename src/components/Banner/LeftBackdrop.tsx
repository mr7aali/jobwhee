import React from "react";

const LeftBackdrop = () => {
  return (
    <div
      style={{
        clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0 100%, 0 60%)",
        backdropFilter: "blur(35px)",
        borderRadius: "28px",
        padding: "33px 33px 45px 61px",
      }}
      className="absolute top-[121px] right-[57px] pt-[33px] pb-[45px] pl"
    >
      <div>
        <span className="text-white text-[40px] font-extrabold leading-[50px] uppercase">
          We`ll <span className="text-[#CBEC5E] cursor-pointer"> handle </span>{" "}
          that
        </span>
      </div>
    </div>
  );
};

export default LeftBackdrop;
