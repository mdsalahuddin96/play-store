import Banner from "@/components/Banner";
import States from "@/components/States";
import TrandingApps from "@/components/TrandingApps";
import { Suspense } from "react";
 const appPromise=fetch("http://localhost:3000/data.json").then(res=>res.json())
export default function Home() {
  return (
    <>
      <Banner></Banner>
      <States></States>
      <section className="bg-base-300 py-20">
        <div className="container mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold">Trending Apps</h1>
          <p className="text-lg">Explore All Trending Apps on the Market developed by us</p>
        </div>
        <Suspense fallback={<h2 className="text-4xl">Data Loading...</h2>}>
            <TrandingApps appPromise={appPromise}></TrandingApps>
        </Suspense>
      </section>
    </>
  );
}
