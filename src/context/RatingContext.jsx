"use client"

import { createContext, useState } from "react";

export const RatingContext=createContext()
const RatingContextProvider = ({children}) => {
    const [rating,setRating]=useState([])
    const data={
        rating,
        setRating
    }
    return (
        <RatingContext.Provider value={data}>
            {children}
        </RatingContext.Provider>
    );
};

export default RatingContextProvider;

// 'use client'
 
// import { createContext } from 'react'
 
// export const ThemeContext = createContext({})
 
// export default function ThemeProvider({ children }) {
//   return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
// }