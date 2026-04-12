
import Image from "next/image";

import RatingChart from "@/components/RatingChart";
import InstallNow from "@/components/InstallNow";
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
      {/* client component */}
      <InstallNow selectedApp={selectedApp}></InstallNow>

    {/* Ratings section */}
      <div className="px-10 py-5 border-b border-gray-300">
            <h3 className="text-2xl font-bold">Ratings</h3>
            <RatingChart ratings={ratings}></RatingChart>
      </div>
    {/* Description section */}
      <div className="px-10 py-5 ">
            <h3 className="text-2xl font-bold mb-5">Description</h3>
            <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
