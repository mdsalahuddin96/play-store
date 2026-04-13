"use client";

import { InstallAppContext } from "@/context/InstallAppContextProvider";
import { useContext, useEffect, useState } from "react";

const SortBy = () => {
  const { installedApp, setInstalledApp } = useContext(InstallAppContext);
  const [sortedBy, setSortedBy] = useState("");
  useEffect(() => {
    if (sortedBy === "Size") {
      const sortedApps = [...installedApp].sort((a, b) => b.size - a.size);
      setInstalledApp([...sortedApps]);
    }
    else if(sortedBy==='Rating'){
      const sortedApps = [...installedApp].sort((a, b) => b.ratingAvg - a.ratingAvg);
      setInstalledApp([...sortedApps]);
    }
  }, [sortedBy]);

  return (
    <div className="container mx-auto flex  justify-between item-center py-8">
      <h3 className="text-2xl font-medium">
        ({installedApp.length})Apps found
      </h3>
      <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn">
          Sort by {sortedBy}⬇️
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => setSortedBy("Size")} name="size">
              Size
            </a>
          </li>
          <li>
            <a onClick={() => setSortedBy("Rating")} name="rating">
              Rating
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortBy;
