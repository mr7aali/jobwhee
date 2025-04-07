import React from "react";
import dynamic from "next/dynamic";

// Dynamic imports for UI components
const SectionTitle = dynamic(() => import("../ui/SectionTitle"));
const FilledButtion = dynamic(() => import("../ui/button/FilledButtion"));

// Dynamic imports for SVG icon components
const IconDerectionUp = dynamic(() => import("@/svg-icons/IconDerectionUp"));
const IconSearch = dynamic(() => import("@/svg-icons/IconSearch"));
const IconGropImages = dynamic(() => import("@/svg-icons/IconGropImages"));
const IconOk = dynamic(() => import("@/svg-icons/IconOk"));
const PerfectMatch = () => {
  const tips: string[] = [
    "Faster and More Relevant Matches",
    "Enhanced User Experience with Filters & Suggestions",
    "Increased Visibility and Opportunities",
  ];
  return (
    <div className="mt-[120px]">
      <SectionTitle title="FIND THE PERFECT MATCH IN SECONDS" />

      <div className="grid grid-cols-2 mt-[70px]">
        <div>
          <h2 className="text-[#18470D] font-medium text-[50px] ">
            Whether you’re a talent <br /> or a client, start your <br />{" "}
            journey now.
          </h2>
          <span className="text-[#545454] font-normal text-[20px] mt-5">
            Easily find the right talent or opportunity. <br /> Start your
            journey with just a click
          </span>
          {/* input container */}
          <div className="w-full mt-5">
            <div className="max-w-[555px] shadow-blue-100 shadow-xl bg-white flex rounded-full p-1 items-center ">
              <div>
                <IconSearch />
              </div>
              <div className="flex-1">
                <input
                  style={{ borderRight: "1px solid #cdcdcd" }}
                  className="w-full px-2  outline-none bg-transparent text-[#737373] placeholder:text-[#737373] text-[16px] font-medium"
                  type="text"
                  placeholder="Find a job, talent or service"
                />
              </div>
              <div className="flex items-center gap-2 text-[#737373] font-medium rounded-full px-6 py-3.5 cursor-pointer ">
                <span>Talent</span>
                <span>
                  <IconDerectionUp />
                </span>
              </div>
            </div>
          </div>
          {/* button container */}
          <div className="mt-9 flex gap-3">
            <FilledButtion
              key={3}
              text="Sign Up"
              bg="[#CBEC5E]"
              textColor="[#18470D]"
            />
            <FilledButtion
              key={34}
              text="Contact Us"
              bg="black"
              textColor="white"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 mt-11">
            {tips.map((item, key) => (
              <div key={key} className="flex gap-3 text-[18px] font-medium ">
                <IconOk /> <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <IconGropImages />
        </div>
      </div>
    </div>
  );
};

export default PerfectMatch;
