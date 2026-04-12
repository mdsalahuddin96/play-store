'use client'
import React, { createContext, useState } from 'react';
export const InstallAppContext=createContext()

const InstallAppContextProvider = ({children}) => {
    const [installedApp, setInstalledApp]=useState([])
    const data={
        installedApp,
        setInstalledApp
    }
    return (
        <InstallAppContext.Provider value={data}>
            {children}
        </InstallAppContext.Provider>
    );
};

export default InstallAppContextProvider;