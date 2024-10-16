import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import scratchylogo from "../Assets/scratchylogo.png";



const  Navbar = ({ handleContactClick }) => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        // the opposite of nav
        setNav(!nav)
    }

    const handleLinkClick = (sectionId) => {
        setNav(!nav); // Close the navbar
        if (sectionId) {
          document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
        }
      };
    return ( 
        <div className="flex justify-between items-center fixed top-0 left-0 right-0 z-50 py-2 mx-2  md:mx-10 rounded-full bg-transparent mt-4 px-4 text-white font-Montserrat ">
            <div>
                
                <a href="/">
                    <img src={scratchylogo} className="w-20" alt="logo" />
                </a>
               
            </div>
            
            <div>
                <ul className="hidden mobile:hidden  md:flex lg:flex xl-flex 2xl:flex text-gray-900 mx-auto  ">
                    <li className="p-4 hover:underline hover:cursor-pointer"><a href="/about">About</a></li>
                    <li className="p-4 hover:underline hover:cursor-pointer"><a href="/contact">Contact</a></li>
                    <li className="p-4 hover:underline hover:cursor-pointer"><a href="/gallery">Gallery</a></li>
                    
                </ul>
            </div>


            <div onClick={handleNav} className="mobile:block md:hidden 2xl:hidden lg:hidden xl:hidden z-20">
                {nav ? <AiOutlineClose className="text-black z-80" size={20}/> : <AiOutlineMenu className="text-black" size={20}/>} 
            </div>

            {/* toggle menu */}
            <div className={nav ? "fixed left-0 top-0 h-full w-[90%] ease-out duration-500 bg-gray-100" : "fixed left-[-100%]"}>

                <div className="flex align-middle mt-4 ml-4 ">
                    <a href="/">
                        <img src={scratchylogo} className="w-20" alt="logo" />
                    </a>
                    
                </div>

                <ul className="flex flex-col p-4 my-6 gap-16 text-black">
                    <li className="p-4 border-l border-blue-600" onClick={() => { handleLinkClick() } }><a href="/about">About</a></li>
                    <li className="p-4 border-l border-green-600" onClick={() => { handleLinkClick() } }><a href=".contact">Contact</a></li>
                    <li className="p-4 border-l border-pink-600" onClick={() => { handleContactClick()}}><a href="/gallery">Gallery</a></li>
                </ul>

               
            </div>
        </div>
     );
}
 
export default Navbar;