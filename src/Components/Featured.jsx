import React from "react";

const Featured = () => {
  return (
    <div>
      <div className="heading pl-20 pt-24 text-6xl">
        <h1 className="tracking-tighter">Featured projects</h1>
      </div>
      <div className="w-full pl-16 pr-16 pt-20 border-t-[0.1vw] border-black mt-8">
        <div className="flex flex-wrap gap-10">
          {[
            {
              name: "cardboardspceship",
              im: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
            },
            {
              name: "AH2 & Matt Horn",
              im: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
            },
            {
              name: "Fyde",
              im: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
            },
            {
              name: "Vise",
              im: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
            },
            {
              name: "Premium Blend",
              im: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
            },
            {
              name: "Trawa",
              im: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
            },
          ].map((item, index) => (
            <div key={index} className="w-[42vw] uppercase">
              <div className="flex pb-3 items-center gap-2">
                <div className="h-2 w-2 bg-black rounded-full"></div>
                <h1 className="text-xl">{item.name}</h1>{" "}
              </div>

              <div
                className="h-[40vw] imagediv relative transform transition-transform duration-300 ease-in-out hover:scale-90 rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url(${item.im})`,
                  backgroundSize: "cover",
                }}
              >
                {/* Heading that appears on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h2 className="text-white text-3xl font-bold">{item.name}</h2>
                </div>
              </div>

              <button className="mt-3 ml-3 border-2 font-medium border-black text-gray-800 rounded-full px-6 py-2 text-sm hover:bg-black hover:text-white transition-colors duration-300">
                INVESTOR DECK
              </button>

              {index % 2 === 1 && (
                <button className="mt-3 ml-3 border-2 font-medium border-black text-gray-800 rounded-full px-6 py-2 text-sm hover:bg-black hover:text-white transition-colors duration-300">
                  INVESTOR DECK
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-40">
        <button className="relative bg-black text-white font-semibold py-5 pl-10 pr-16 rounded-full text-xl flex items-center group hover:bg-gray-800">
          VIEW ALL CASE STUDIES

          {/* White dot */}
          <div className="whitedot p-3 rounded-full ml-10 bg-white transition-opacity duration-300 opacity-100 group-hover:opacity-0"></div>

          {/* Arrow that appears on hover */}
          <span className="absolute right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
            <svg
              className="w-6 h-6 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Featured;
