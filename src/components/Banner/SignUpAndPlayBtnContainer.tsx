import IconPlayBtn from "@/svg-icons/IconPlayBtn";
import React from "react";

const SignUpAndPlayBtnContainer = () => {
  return (
    <div className="absolute top-[237px] right-[102px] flex gap-2.5 ">
      <span className="bg-[#CBEC5E] text-black font-medium text-[16px] px-7 py-3.5 rounded-full">
        {" "}
        Sign Up for Contract
      </span>
      <IconPlayBtn />
    </div>
  );
};

export default SignUpAndPlayBtnContainer;
