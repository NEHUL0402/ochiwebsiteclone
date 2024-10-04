import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Landingpage = () => {
  return (
    <div className="w-full h-screen pt-1 text-zinc-800">
      <div className="textstructure mt-40 px-12 ">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex">
                {index === 1 && (
                  <div className="relative top-[0.3vw] w-[8vw] h-[5vw] rounded-xl mr-[0.5vw]"
                  style={{ backgroundImage: "url(/images/image1.png)",
                    backgroundPosition:"center",
                    backgroundSize: "100%", 
                    backgroundRepeat: "no-repeat",
                   }}
                  ></div>
                )}
                <h1 className="uppercase text-[7vw] -tracking-widest font-semibold font-founders-grotesk leading-[5.8vw]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center border-t-[1px] border-zinc-400 mt-28 py-3 px-14">
        {[
          "For public and private companies",
          "From the first pitch to ipo",
        ].map((item, index) => (
          <p
            className="text-lg tracking-tight font-normal leading-none "
            key={index}
          >
            {item}
          </p>
        ))}
        <div className="start flex justify-between items-center">
          <div className="px-4 py-1.5 border-[1.5px] border-zinc-950 uppercase  rounded-full font-semibold">
            start the project
          </div>
          <div className="border-[1.5px] border-zinc-950 rounded-[7vw] px-1.5 py-1.5 ml-2">
            <MdArrowOutward size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
