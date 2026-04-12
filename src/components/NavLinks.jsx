'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href, text}) => {
    const pathName=usePathname()
    console.log(pathName)
    return (
        <li className={`pb-1 ${pathName===href&& 'text-green-600 border-b-2 border-green-600'}`}>
            <Link href={href} >{text}</Link>
        </li>
    );
};

export default NavLinks;