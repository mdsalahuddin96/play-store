'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href, text}) => {
    const pathName=usePathname()
    return (
        <li className={` ${pathName===href&& 'bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text  border-b-1 border-[#632EE3]'}`}>
            <Link href={href} className="" >{text}</Link>
        </li>
    );
};

export default NavLinks;