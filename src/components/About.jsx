import React from "react"
import { useInView } from 'react-intersection-observer';
import './animations.css';
import fontimage_png from "../Assets/fontimage_png.png";


const About = () => {
    
    
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Adjust based on when you want the animation to start
    });
    return (
        <div className="bg-[#FFFEED] w-full pt-32 pb-24 px-2 md:px-10 lg:px-16">
           <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-[700px]">
                    <h2 className="text-2xl font-kablammo">About us</h2>
                    <h2
                     ref={ref}
                     className={`transition-opacity duration-1000 ease-in-out text-4xl font-lovers my-6 ${inView ? 'slide-in-from-left' : 'opacity-0'}`}>Explore unique and artistic fonts for every creative need, from calligraphy to modern typefaces.</h2>
                    <p>At ScratchyNib, we celebrate typography by offering a curated collection of unique fonts that cater to all creative endeavors. Our diverse range of calligraphy styles and modern typefaces makes it easy for designers and artists to find
                        the perfect font for any project. Whether you're crafting invitations or developing a brand identity, ScratchyNib is your go-to resource for exceptional fonts that inspire creativity.
                    </p>
                    <a href="/about">
                        <button className="bg-purple-500 hover:bg-purple-600 duration-200 text-white px-4 py-2 font-kablammo rounded-lg mt-4">LEARN MORE</button>
                    </a>
                </div>
                <div
                   ref={ref}
                   className={`transition-opacity duration-1000 ease-in-out flex justify-end w-full mt-10 md:mt-0 ${inView ? 'slide-in-from-bottom' : 'opacity-0'}`}>
                    <img src={fontimage_png} alt="img" className="w-full md:w-[500px] h-[500px] object-cover rounded-lg" />
                   
                </div>
           </div>
        </div>
    )
}

export default About;