import Image from "next/image";
import cardImage from "./../../../public/images/cardImage.png";
import IconCardBtn from "@/svg-icons/IconCardBtn";

const Card = () => {
  return (
    <div className="">
      <Image width={223} height={262} src={cardImage} alt="" />

      <div className="flex justify-between items-center bg-white rounded-full p-1 mt-2">
        <div className="text-[14px] font-bold px-2.5 ">
          <p>Household</p>
          <p>Services</p>
        </div>

        <div>
          <IconCardBtn />
        </div>
      </div>
    </div>
  );
};

export default Card;
