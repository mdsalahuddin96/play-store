import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import downloadImage from "@/assets/images/icon-downloads.png";

const InstalledAppCard = ({ app }) => {
  const { image, title, ratingAvg, downloads,size } = app;
  return (
    <div className="bg-base-100 flex justify-between items-center p-2 rounded-xl">
      <div className="flex gap-3 items-center">
        <div className="">
          <Image src={image} alt={title} width={50} height={50} />
        </div>
        <div className="space-y-2">
          <p className="font-medium text-lg">{title}</p>
          <div className="flex items-center gap-4 font-semibold text-sm ">
            <div className=" text-green-600 flex items-center gap-1">
              <Image
                src={downloadImage}
                alt="download icon"
                height={15}
                width={15}
              />
              {downloads}
            </div>

            <div className="text-[#FF8811] flex items-center gap-1">
              <FaRegStar /> {ratingAvg}
            </div>
            <div className="text-[#627382]">
                {size} MB
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn btn-success">Uninstall</button>
      </div>
    </div>
  );
};

export default InstalledAppCard;
