import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-20 bg-[#004D43] rounded-t-3xl text-white">
      <div className="text h-[18vw] border-t-[0.2vw] border-b-[0.2vw] border-[#26685F] flex whitespace-nowrap uppercase items-center overflow-hidden">
        {["we are ochi", "we are ochi", "we are ochi"].map((item, index) => (
          <motion.h1
            initial={{ x: "0%" }} // Start from the right side
            animate={{ x: "-100%" }} // Move to the left
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 12
            }}
            key={index}
            className="pr-32 text-[19vw] font-['Geist Sans'] font-bold tracking-tighter leading-none"
          >
            {item}
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
