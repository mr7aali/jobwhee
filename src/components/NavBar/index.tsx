import IconENFlag from "@/svg-icons/IconFlag";
import OutlineBtn from "./OutlineBtn";
import IconJobwhee from "@/svg-icons/IconJobwhee";
import IconDerection from "@/svg-icons/IconDerection";

const NavBar = () => {
  const menus: string[] = ["Post a Job", "Explore Jobs", "How It Works"];
  return (
    <div className="flex justify-between items-center max-w-[1440px] mx-auto bg-black py-3.5 px-3.5 rounded-full mt-6 mb-4">
      <div className="ml-6">
        <IconJobwhee />
      </div>
      <div className="flex text-white text-[16px] font-semibold gap-8">
        {menus.map((Item, index) => (
          <span key={index}>{Item}</span>
        ))}
      </div>
      <div className="flex gap-1.5">
        <div className="flex items-center border border-solid border-[#94949480] rounded-full px-2 cursor-pointer">
          <IconENFlag />
          <span className="text-white flex items-center px-2.5 gap-1 text-[14px] font-medium">
            EN <IconDerection />{" "}
          </span>
        </div>
        <OutlineBtn text="Sign In" isTransparent={false} />
        <OutlineBtn text="Sign Up" isTransparent={true} />
      </div>
    </div>
  );
};

export default NavBar;
