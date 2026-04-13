import React from "react";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-[#001931] text-gray-300 pt-12 pb-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Section 1: Brand/About */}
        <div className="space-y-4">
          <div className="flex gap-1 items-center">
            <Image src={logo} alt="logo image" width={40} height={40} />
            <p className="font-bold text-white">Hero.io</p>
          </div>
        </div>
        

        {/* Section 4: Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Connect With Us</h3>
          <p className="text-sm mb-4">Social Links</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a 
              href="https://github.com/mdsalahuddin96" 
              target="_blank" 
              className="p-2 bg-white text-black rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <GiThunderBlade size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 bg-white text-black rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <LiaLinkedin size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 bg-white text-black rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <FaFacebook size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 bg-white text-black rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <BsTwitterX size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
        <p>
          &copy; {new Date().getFullYear()} Hero.Io All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
