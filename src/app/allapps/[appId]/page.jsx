import Image from "next/image";
import downloadIcon from '../../../assets/images/icon-downloads.png'
import ratingIcon from "../../../assets/images/icon-ratings.png"
import reviewIcon from "../../../assets/images/icon-review.png"
import RatingChart from "@/components/RatingChart";
const AppDetails = async ({ params }) => {
  const { appId } = await params;
  const res = await fetch("http://localhost:3000/data.json");
  const apps = await res.json();
  const selectedApp = apps.find((app) => app.id === parseInt(appId));
  const {
    id,
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = selectedApp;


  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-4 border-b border-gray-300 p-10">
        <div className="bg-base-100 p-6">
          <Image src={image} alt={title} width={200} height={200} />
        </div>

        <div>
          <h1 className="font-bold text-3xl">{title}</h1>
          <p>Developed by <span className="text-[#632EE3]">{companyName}</span></p>
          <div className="grid md:grid-cols-3 gap-3 border-t border-gray-300 pt-6 mt-3">
            <div className="flex flex-col items-center justify-left">
                <Image
                src={downloadIcon}
                alt="download icon"
                width={25}
                height={25}
                />
                <p>Downloads</p>
                <span className="text-3xl font-bold">{downloads}</span> 
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image
                src={ratingIcon}
                alt="Rating icon"
                width={25}
                height={25}
                />
                <p>Average Ratings</p>
                <span className="text-3xl font-bold">{ratingAvg}</span> 
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image
                src={reviewIcon}
                alt="Review icon"
                width={25}
                height={25}
                />
                <p>Total Reviews</p>
                <span className="text-3xl font-bold">{reviews}</span> 
            </div>
          </div>
          <div className="mt-5 text-center md:text-left">
            <span className="bg-green-400 text-white font-semibold py-3.5 px-5">Install Now ({size}MB)</span>
          </div>
        </div>
      </div>
      <div className="px-10 py-5 border-b border-gray-300">
            <h3 className="text-2xl font-bold">Ratings</h3>
            <RatingChart ratings={ratings}></RatingChart>
      </div>
      <div className="px-10 py-5 ">
            <h3 className="text-2xl font-bold mb-5">Description</h3>
            <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
