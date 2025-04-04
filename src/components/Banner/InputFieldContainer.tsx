import IconDerectionUp from "@/svg-icons/IconDerectionUp";
import IconPointer from "@/svg-icons/IconPointer";
import IconSearch from "@/svg-icons/IconSearch";
import IconTeam from "@/svg-icons/IconTeam";

const InputFieldContainer = () => {
  return (
    <div className="w-full absolute top-[517px] ">
      <div className="max-w-[555px] mx-auto bg-white flex rounded-full p-1 items-center ">
        <div>
          <IconSearch />
        </div>
        <div className="flex-1">
          <input
            className="w-full px-2 outline-none bg-transparent text-[#737373] placeholder:text-[#737373] text-[16px] font-medium"
            type="text"
            placeholder="Find a job, talent or service"
          />
        </div>
        <div
          style={{ border: "1px solid #cdcdcd" }}
          className="flex items-center gap-2 text-[#737373] font-medium rounded-full px-6 py-3.5 bg-[#F0F1F4] cursor-pointer relative"
        >
          <span>Talent</span>
          <span>
            <IconDerectionUp />
          </span>
          <div className="absolute top-15 left-0 bg-white rounded-xl min-w-[240px] py-2 px-3 flex flex-col gap-2 shadow-lg">
            <div className="flex gap-1">
              <IconTeam />
              <div>
                <h3 className="text-[14px] font-medium text-[#181818]">
                  Talent
                </h3>
                <p className="text-[11px] text-[#3F3C3C]">
                  Hire professionals effortlessly.
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <IconTeam />
              <div>
                <h3 className="text-[14px] font-medium text-[#181818]">
                  Client
                </h3>
                <p className="text-[11px] text-[#3F3C3C]">
                  Apply to jobs posted by clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-4">
        <IconPointer />
      </div>
      <div className="w-[355px] mx-auto bg-white rounded-full py-3.5 px-10 shadow-2xl flex justify-center">
        <p className="text-xl uppercase justify-center font-extrabold text-[#000000]">
          Education and Tutoring{" "}
        </p>
      </div>
    </div>
  );
};

export default InputFieldContainer;
