import Image from "next/image";
import React from "react";
import downloadImage from '../assets/images/icon-downloads.png'
import { FaRegStar } from "react-icons/fa";
const AppCard = ({ app }) => {
  const { image, title, ratingAvg, downloads } = app;
  return (
    <div className="bg-base-100 flex flex-col gap-4 p-4 ">
      <div className="bg-base-200 p-10 flex items-center justify-center rounded-2xl ">
        <Image src={image} alt={title} width={200} height={200} />
      </div>
      <p className="font-medium text-lg">{title}</p>
      <div className="flex justify-between items-center ">
        <div className="bg-base-200 text-green-600 p-2.5 flex items-center gap-1 font-medium rounded-xl">
            <Image
            src={downloadImage}
            alt="download icon"
            height={20}
            width={20}
            />
            {downloads}
        </div>
        <div className="text-[#FF8811] bg-[#FFF0E1] p-2.5 flex items-center gap-1 font-medium rounded-xl"><FaRegStar/> {ratingAvg}</div>
      </div>
    </div>
  );
};

export default AppCard;
