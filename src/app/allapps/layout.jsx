import RatingContextProvider from "@/context/RatingContext";

const AppsLayout = ({ children }) => {
  return (
    <div className="bg-base-300 py-10">
      <div className="container mx-auto text-center space-y-4">
        <h1 className="text-5xl font-bold">Our All Applications</h1>
        <p className="text-lg">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <main><RatingContextProvider>{children}</RatingContextProvider></main>
    </div>
  );
};

export default AppsLayout;
