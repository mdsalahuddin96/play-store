"use client"
import { InstallAppContext } from "@/context/InstallAppContextProvider";
import React, { useContext } from "react";
import InstalledAppCard from "./InstalledAppCard";

const InstalledApp = () => {
  const { installedApp } = useContext(InstallAppContext);
  if (installedApp.length === 0) {
    return (
      <div className="flex items-center justify-center h-1/3">
        <h1 className="text-4xl font-semibold">No Apps Installed!</h1>
      </div>
    );
  }
  return (
    <div className="container mx-auto space-y-4">
      {installedApp.map((app) => (
        <InstalledAppCard key={app.id} app={app}></InstalledAppCard>
      ))}
    </div>
  );
};

export default InstalledApp;
