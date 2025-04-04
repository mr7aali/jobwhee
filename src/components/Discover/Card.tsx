import Image from "next/image";
import IconCardBtn from "@/svg-icons/IconCardBtn";

const Card = ({ title, imageSrc }: { title: string; imageSrc: string }) => {
  const words = title.split(" ");
  const lastWord = words.length > 1 ? words.pop() : title;
  const remainingSentence = words.join(" ");

  return (
    <div className="">
      <Image width={223} height={262} src={imageSrc} alt="" />

      <div className="flex justify-between items-center bg-white rounded-full p-1 mt-2">
        <div className="text-[14px] font-bold pl-[18px]">
          <p>{remainingSentence}</p>
          <p>{lastWord}</p>
        </div>

        <div>
          <IconCardBtn />
        </div>
      </div>
    </div>
  );
};

export default Card;
