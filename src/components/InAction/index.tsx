import Image from "next/image";
import FilledButtion from "../ui/button/FilledButtion";
import SectionTitle from "../ui/SectionTitle";
import imageSrc from "./../../../public/images/inActionImage.png";
const InAction = () => {
  return (
    <div className="mt-[120px] mb-[120px]">
      <SectionTitle title="SEE Jobwhee IN ACTION" />
      <div className="mt-[38px] flex justify-center gap-3">
        <FilledButtion key={34} text="Sign In" bg="black" textColor="white" />
        <FilledButtion
          key={3}
          text="Sign Up"
          bg="[#CBEC5E]"
          textColor="[#18470D]"
        />
      </div>

      <div>
        <Image src={imageSrc} width={1353} height={800} alt="" />
      </div>
    </div>
  );
};

export default InAction;
