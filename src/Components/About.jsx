import React from "react";

const About = () => {
  return (
    <div className="w-full  bg-[#CDEA68] rounded-3xl text-[#212121]">
      <div className="p-20">
        <h1 className='font-["Fira Code"] text-[4vw] font-normal tracking-tight leading-[3.8vw]'>
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell prod­ucts, ex­plain com­plex
          ideas, and hire great peo­ple.
        </h1>
      </div>
      <div className="main border-t-[0.2vw] border-b-[0.2vw] border-[#B3CC5E] text-[1.1vw] flex items-start justify-between p-12 pb-24 ">
        <div className="pl-10">
          <h1>What you can expect:</h1>
        </div>
        <div className="w-[20vw] ml-40">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people. We believe the mix of
            strategy and design (with a bit of coffee) is what makes your
            message clear, convincing, and captivating.
          </p>
        </div>
        <div className="mr-40 mt-20">
          <h1>S: </h1>
          <div>
            {["Instagram", "Behance", "Facebook", " Linkedin"].map(
              (item, index) => {
                return <a className="cursor-pointer underline block">{item}</a>;
              }
            )}
          </div>
        </div>
      </div>
      <div className="bottom p-20 flex justify-between">
        <div className="-mt-[4.9vw]">
          <h1 className="text-[4vw] font-medium tracking-tighter">
            Our approach:
          </h1>
          <button class="flex items-center mt-3 bg-black text-white px-7 py-3 rounded-full text-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white transition duration-300 ease-in-out">
            READ MORE
            <div className=" ml-4 p-1 bg-white rounded-full"></div>
          </button>
        </div>
        <div>
          <img className="-mt-[3.8vw] h-[35vw] rounded-lg" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"/>
        </div>
      </div>
    </div>
  );
};

export default About;
