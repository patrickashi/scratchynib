import React from 'react';
import '../index.css';
import fontimage_png from "../Assets/fontimage_png.png";

const Sectwo = () => {
  return (
    <div className="h-screen bg-yellow-100 px-2 md:pl-10 items-center">
        <div className='flex flex-col md:flex-row justify-evenly'>
            <div className='w-full md:w-[800px] mt-40'>
                <div>
                    <h1 className='font-kablammo text-4xl'>Welcome to ScratchyNib</h1>
                </div>
                <div className='my-6'>
                    <p className='font-lovers text-4xl'>Explore unique calligraphy styles across a wide variety of font families.</p>
                </div>
                <div className=''>
                    <a className='bg-purple-400 hover:bg-purple-500 duration-200 font-kablammo px-4 py-2 rounded-md text-white' href='/gallery'>Gallery</a>
                </div>
            </div>
            <div className='w-full flex justify-center h-80 md:h-screen mt-16 md:mt-0'>
                <img src={fontimage_png} className='w-full rounded-md md:rounded-none object-cover' alt="img" />
            </div>
        </div>
    </div>
  );
}

export default Sectwo;