'use client'
import { use } from "react";

const TrandingApps = ({appPromise}) => {
    const apps=use(appPromise)
    console.log(apps[0])
    return (
        <div>
            <h1>{apps[0].title}</h1>
        </div>
    );
};

export default TrandingApps;