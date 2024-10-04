import React from 'react'

const Background = () => {
  return (
    <div className='relative w-full h-[70vw] bg-[#CDEA68] p-5 flex items-center justify-center rounded-t-2xl'>
        <div className='uppercase leading-[0.8] text-center'>
        <h1 className='font-bold text-[11vw] tracking-tighter'>ready <br/> to start <br/> the project ?</h1>
        <button className='mt-24 font-semibold border-2 border-black rounded-full px-16 text-lg py-4 uppercase bg-black text-white' >start the project</button>
        <h1 className='text-xl mt-8'>OR</h1>
        <button className='border-2 mt-8 rounded-full px-16 text-lg py-4 uppercase border-black'>HELLO@OCHI.DESIGN</button>
        </div>
        <div className='absolute top-1/2 left-1/2'>
        {/*moving eye code*/}
        </div>
    </div>
  )
}

export default Background