"use client";
import { use } from "react";
import AppCard from "./AppCard";
import Link from "next/link";

const TrandingApps = ({ appPromise }) => {
  const apps = use(appPromise);
  const trandingApps = apps.slice(0, 8);
  return (
    <div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 my-10 container mx-auto">
        {trandingApps.map((app) => (
          <Link key={app.id} href={`/allapps/${app.id}`}>
            <AppCard app={app}></AppCard>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Link href={"/allapps"}>
          <button className="btn bg-[#632EE3] text-white">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default TrandingApps;
