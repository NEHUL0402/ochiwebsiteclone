import React, { useState, useEffect } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="main w-full h-screen overflow-hidden">
      <div className='relative w-full bg-cover bg-center h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="eyecontainer flex items-center gap-10 justify-center absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="1stbigeye relative w-[15vw] h-[15vw] rounded-full bg-[#F4F4F4]">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className=" bigline absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-32 h-32"
            >
              <div className="blackeye relative w-28 h-28 rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8"
                >
                  <div className="blackeye w-5 h-5 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="1stbigeye relative w-[15vw] h-[15vw] rounded-full bg-[#F4F4F4]">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className=" bigline absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-32 h-32"
            >
              <div className="blackeye relative w-28 h-28 rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8"
                >
                  <div className="blackeye w-5 h-5 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Eyes;
