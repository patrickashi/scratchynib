import React from "react"
import scratchylogo from "../Assets/scratchylogo.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaRegFileCode } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { TiGroup } from "react-icons/ti";


const Footer = () => {
    return (
        <div className="duration-200 text-black ">
            <div className="flex gap-16 flex-col px-2 md:px-10 lg:px-16 py-10 md:flex-row bg-yellow-50 justify-between pb-4">
                <div className="">
                    <div className="flex align-middle justify-end hover:text-black ">
                        <img src={scratchylogo} className="w-20" alt="logo" />
                    </div>
                  
                </div>
                <div>
                    <h1 className=" mb-4 font-kablammo">Menu</h1>
                    <ul className="flex flex-col gap-2">
                        <a href="/about">
                            <li>
                                <div className="flex align-middle">
            
                                    About us
                                </div>
                            </li>
                        </a>
                        <a href="/contact">
                            <li>
                                <div className="flex align-middle">
                                    
                                    contact us
                                </div>
                            </li>
                        </a>
                        <a href="/gallery">
                            <li>
                                <div className="flex align-middle">
                                    gallery
                                </div>
                            </li>
                        </a>
                    </ul>
                </div>
               
                <div>
                    <h1 className="font-kablammo mb-4">Contact</h1>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <div className="flex align-middle ">
                                <FaLocationDot className="mt-1 mr-1 text-green-400"/>
                                Lagos
                            </div>
                        </li>
                        <li>
                            <div className="flex align-middle ">
                                <MdCall className="mt-1 mr-1 text-gold"/>
                                +234 91 0000 0000
                            </div>
                        </li>
                        <li>
                            <div className="flex align-middle ">
                                <CiMail className="mt-1 mr-1 text-sky-800"/>
                                scatchynib@gmail.com
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-kablammo mb-4">Social</h1>
                    <ul className="flex flex-col gap-2">
                        <a href="http://wa.me/">
                            <li>
                                <div className="flex align-middle">
                                    <FaWhatsapp className="mt-1 mr-1 text-emerald-700" />
                                    Whatsapp
                                </div>
                            </li>
                        </a>
                        <a href="https://www.instagram.com/">
                            <li>
                                <div className="flex">
                                    <FaInstagram className="mt-1 mr-1 text-red-600"/>
                                    Instagram
                                </div>
                            </li>
                        </a>
                        
                        <a href="https://www.youtube.com/">
                            <li>
                                <div className="flex">
                                    <FaYoutube className="mt-1 mr-1 text-red-600"/>
                                    Youtube
                                </div>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between py-4 px-2 md:px-10 lg:px-16 text-xs text-black bg-yellow-100">
                <div>Pricacy Policy</div>
                <div>©2024 scratchynib</div>
            </div>
        </div>
    )
}

export default Footer;