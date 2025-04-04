import React from "react";
import SectionTitle from "../ui/SectionTitle";
import TalentClientButtion from "../ui/button/TalentClientButtion";
import gropImage from "./../../../public/images/group_photo.png";
import Image from "next/image";
import IconBlackCircleDerection from "@/svg-icons/IconBlackCircleDerection";
const Platform = () => {
  return (
    <div>
      <SectionTitle title="ADVANTAGES OF THE PLATFORM" />
      <div className="flex justify-end mt-[70px] ">
        <TalentClientButtion />
      </div>
      <div className="grid grid-cols-2 mt-8">
        <div>
          <Image src={gropImage} width={614} height={397} alt="" />
        </div>
        <div className="flex flex-col gap-3.5 ">
          {[
            "Top Clients Verified",
            "Risk-Free Hiring",
            "Safe contract system",
          ].map((Item) => (
            <div
              key={Item}
              className="w-full flex justify-between py-8 cursor-pointer pr-9 items-center pl-8 rounded-[30px]"
              style={{ border: "2px solid #EAEAEA" }}
            >
              <h1 className="text-[30px]">{Item}</h1>
              <IconBlackCircleDerection />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;
