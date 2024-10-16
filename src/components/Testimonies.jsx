import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; // Correct module imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import local images

const Testimonies = () => {
  const Testimonies = [

    {
    //   img: ohasoup,
      name: 'Jessica',
      description: "ScratchyNib has completely transformed my design projects! The variety of calligraphy styles available is unmatched, and it makes finding the perfect font for every creative piece so easy. A must-have resource for every designer!" ,

     
    },
    {
    //   img: rice1,
      name: 'Michael',
      description: "I was blown away by the diversity of fonts on ScratchyNib. Whether I’m working on social media graphics or website banners, I always find the exact style I need to elevate my content. Truly a game changer!",
      
    },
    {
        // img: chickenstew,
        name: 'Alicia',
        description: "Finding the right font to complement my illustrations used to be a challenge, but ScratchyNib made it a breeze. The search tool is intuitive, and the font previews save me so much time. Highly recommend for creatives!",
        
    },
    {
        // img: chickenstew,
        name: 'Daniel',
        description: "As a developer working on multiple websites, ScratchyNib is my go-to for unique, high-quality fonts. The range of calligraphy styles adds a personal touch to every project, and the site's ease of use is fantastic!",
        
    },

 
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]} // Swiper automatically uses these modules
      spaceBetween={50}
      slidesPerView={1}
      navigation // Enables next/prev buttons
      pagination={{ clickable: true }} // Enables pagination
    //   scrollbar={{ draggable: true }} // Enables draggable scrollbar
    >
      {Testimonies.map((testimony, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white pt-10 pb-10 mx-2 md:mx-0  shadow-lg items-center flex flex-col justify-center ">

                <div className='group bg-white w-[400px]  border border-gray-400 hover:border-none hover:bg-yellow-700  rounded-2xl pb-10 px-10 md:px-4 mb-2 hover:scale-105 duration-200 cursor-pointer hover:text-white'>
                    {/* <img src={testimony.img} alt={testimony.title} className="w-full object-cover h-20 rounded-lg mt-[-40px]" /> */}
                    <p className=" mt-2 font-lovers">what our clients say</p>
                    <h3 className="group-hover:text-white mt-2 font-kablammo">{testimony.name}</h3>
                    <p>{testimony.description}</p>
                    {/* <p className='font-luckiest'>N{food.price}</p> */}
                    
                </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonies;
