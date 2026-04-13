'use client'
import InstallAppContextProvider from '@/context/InstallAppContextProvider';
import React from 'react';

const Providers = ({children}) => {
    return (
        <InstallAppContextProvider>
            {children}
        </InstallAppContextProvider>
    );
};

export default Providers;