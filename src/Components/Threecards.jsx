import React from 'react';
import './Client.css';

const Threecards = () => {
  return (
    <div className='mt-20 w-full h-[30vw] flex justify-between px-12 py-9 gap-5'>
      <div
        className='relative w-1/2 p-4 rounded-lg bg-[#004D43] flex items-center justify-center'
        style={{
          backgroundImage: 'url("https://ochi.design/wp-content/uploads/2022/04/logo001.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <button className='absolute left-[3vw] border-[#CDEA68] border-[0.1vw] px-3 py-1 rounded-full text-[#CDEA68] top-[21vw]'>©2019-2022</button>
      </div>
      
      <div
        className='relative w-1/4 p-4 rounded-lg bg-[#212121] flex items-center justify-center'
        style={{
          backgroundImage: 'url("https://ochi.design/wp-content/uploads/2022/04/logo002.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      > 
           <button className='shutter-effect absolute hover:bg-white hover:text-black left-[2vw] border-white cursor-pointer border-[0.1vw] px-3 py-1 rounded-full text-white top-[21vw] uppercase'>rating 5.0 on clutch</button>
      </div> 
      <div
        className='relative w-1/4 p-4 rounded-lg bg-[#212121] flex items-center justify-center'
        style={{
          backgroundImage: 'url("https://ochi.design/wp-content/uploads/2022/04/logo003.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
          <button className='shutter-effect absolute hover:bg-white hover:text-black left-[2vw] border-white cursor-pointer border-[0.1vw] px-3 py-1 rounded-full text-white top-[21vw] uppercase'>business bootcamp alumni</button>
      </div>
    </div>
  );
};

export default Threecards;
