import Image from "next/image";
import bannerImage from "./../../../public/BannerImage.png";
import SignUpAndPlayBtnContainer from "./SignUpAndPlayBtnContainer";
import InputFieldContainer from "./InputFieldContainer";
import IconFindTelent from "@/svg-icons/IconFindTelent";
import IconLeftBackdrop from "@/svg-icons/IconLeftBackdrop";
const Banner = () => {
  return (
    <div style={{ position: "relative" }}>
      <Image
        src={bannerImage}
        width={1440}
        height={715.68}
        alt="this is banner image"
      />

      {/* <RightBackdrop /> */}
      <div className="absolute top-10 left-10 ">
        <IconFindTelent />
        <div className="absolute right-0 bottom-0 left-0 top-0 text-[40px] uppercase font-extrabold px-6 py-8 text-white">
          <p>
            Find the{" "}
            <span className="text-[#CBEC5E] cursor-pointer">talent</span> sign
            up
          </p>
          <p>
            & get The{" "}
            <span className="text-[#CBEC5E] cursor-pointer">job </span>
            done{" "}
          </p>
        </div>
      </div>
      {/* <LeftBackdrop /> */}
      <div className="absolute top-[121px] right-[57px] ">
        <IconLeftBackdrop />
        <div
          // style={{ padding: "33px 33px 45px 6px" }}
          className="absolute right-0 bottom-0 left-0 pl-14 pt-8 top-0 text-[40px] uppercase font-extrabold px-6 py-8 text-white"
        >
          <p>
            We`ll <span className="text-[#CBEC5E] cursor-pointer">handle</span>{" "}
            that
          </p>
        </div>
      </div>
      <SignUpAndPlayBtnContainer />
      <InputFieldContainer />
    </div>
  );
};
export default Banner;
