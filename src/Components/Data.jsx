import React from 'react';
import './Client.css';

const Data = () => {
  return (
    <div className='-mt-16 font-medium'>
      {[
        { name1: "planetly", name2: "Nina walloch" },
        { name1: "planetly", name2: "Nina walloch" },
        { name1: "planetly", name2: "Nina walloch" },
        { name1: "planetly", name2: "Nina walloch" },
        { name1: "planetly", name2: "Nina walloch" },
        { name1: "planetly", name2: "Nina walloch" },
        { name1: "planetly", name2: "Nina walloch" },
        { name1: "planetly", name2: "Nina walloch" }
      ].map((item, index) => (
        <div 
          key={index} 
          className={`border-t-[0.1vw] border-zinc-400 flex items-center justify-between px-16 py-5 ${index === 7 ? 'border-b-[0.1vw]' : ''}`}
        >
          <div>
            <button className='capitalize animated-underline'>{item.name1}</button>
          </div>
          <div>
            <h1 className='capitalize'>{item.name2}</h1>
          </div>
          <div>
            <button className='animated-underline'>READ</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Data;
