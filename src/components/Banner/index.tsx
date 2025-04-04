import Image from "next/image";
import bannerImage from "./../../../public/BannerImage.png";
import RightBackdrop from "./RightBackdrop";
import LeftBackdrop from "./LeftBackdrop";
import SignUpAndPlayBtnContainer from "./SignUpAndPlayBtnContainer";
import InputFieldContainer from "./InputFieldContainer";
const Banner = () => {
  return (
    <div style={{ position: "relative" }}>
      <Image
        src={bannerImage}
        width={1440}
        height={715.68}
        alt="this is banner image"
      />

      <RightBackdrop />
      <LeftBackdrop />
      <SignUpAndPlayBtnContainer />
      <InputFieldContainer />
    </div>
  );
};
export default Banner;
