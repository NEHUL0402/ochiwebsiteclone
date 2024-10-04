import React from "react";
import "./Client.css";

const Clients = () => {
  return (
    <div className="w-full mt-20 mb-20">
      <div className="heading p-20 text-7xl tracking-tight">
        <h1>Clients' reviews</h1>
      </div>
      <div className="flex justify-between p-14 border-t-[0.1vw] border-zinc-500">
        <div className="w-1/4">
        <button className="text-xl animated-underline">Karman Ventures</button>
 
        </div>
        <div className="w-1/4">
          <h1 className="text-xl">Services:</h1>
          <button className="mt-16 rounded-3xl px-5 py-1  text-xl text-zinc-500 border-zinc-500 border-2 font-normal hover:text-white hover:bg-black">INVESTER DECK</button><br/>
          <button className="mt-4 rounded-3xl px-5 py-1  text-xl text-zinc-500 border-zinc-500 border-2 font-normal hover:text-white hover:bg-black">SALES DECK</button>
        </div>
        <div className="w-1/4">
          <h1 className="text-xl">William Barnes</h1>
          <img
            className="mt-8 rounded-xl mb-8"
            width={150}
            src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
          />
          <h1 className="text-lg tracking-tight leading-2">
            They were transparent about the time and the stages of the project.
            The end product is high quality, and I feel confident about how they
            were handholding the client through the process. I feel like I can
            introduce them to someone who needs to put a sales deck together
            from scratch, and they would be able to handhold the client
            experience from 0 to 100 very effectively from story to design. 5/5
          </h1>
        </div>
        <div className="w-1/4 flex justify-end">
          <h1 className="text-xl text-zinc-400">READ</h1>
        </div>
      </div>
    </div>
  );
};

export default Clients;
