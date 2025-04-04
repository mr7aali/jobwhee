import IconBlackDimond from "@/svg-icons/IconBlackDimond";
import SectionTitle from "../ui/SectionTitle";
import TalentClientButtion from "../ui/button/TalentClientButtion";
import { successData } from "./successData";
import IconBotton from "@/svg-icons/IconBotton";

const Success = () => {
  return (
    <div className="mt-[120px] mb-[120px]">
      <SectionTitle title="STEPS OF SUCCESS" />
      <TalentClientButtion />

      <div className="flex mt-[30px] gap-2.5">
        {successData.map((Item, key) => (
          <div key={key} className="rounded-4xl bg-white">
            <div className="pt-[18px] pl-[18px]">
              <div className="relative">
                <IconBlackDimond />
                <span className="absolute top-[15px] left-[24px] text-white text-3xl font-semibold">
                  {key + 1}
                </span>
              </div>
            </div>
            <div
              // style={{ border: "1px solid red" }}
              className="w-[272px] h-52 flex justify-center "
            >
              <Item.Icon />
            </div>
            <div className="px-[14px] pb-4 ">
              <h1 className="text-[22px] font-bold">{Item.title}</h1>
              <span className="text-[16px] pt-1.5 ">{Item.subTitle}</span>
            </div>
            <div className="flex justify-center">
              <IconBotton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
