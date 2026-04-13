
import InstalledApp from "@/components/InstalledApp";
import SortBy from "@/components/SortBy";


const InstallationPage = () => {

  return (
    <div className="bg-base-300 py-10">
      <div className="container mx-auto text-center space-y-4">
        <h1 className="text-5xl font-bold">Your Installed Apps</h1>
        <p className="text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      
      <SortBy></SortBy>

      <InstalledApp></InstalledApp>

    </div>
  );
};

export default InstallationPage;
