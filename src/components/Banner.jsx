import React from "react";
import heroImage from '../assets/images/hero.png'
import Image from "next/image";
const Banner = () => {
  return (
    <div className="bg-base-300 pt-20 px-20 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="font-bold text-5xl md:text-7xl">We Build <br/>Productive Apps</h1>
        <p className="text-lg text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div>
          <button className="btn mr-1.5">Play Store</button>
          <button className="btn">App Store</button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
            src={heroImage}
            alt="Hero image"
        />
      </div>
    </div>
  );
};

export default Banner;
