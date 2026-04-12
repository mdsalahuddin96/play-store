import Image from "next/image";
import logo from "../assets/images/logo.png";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import NavLinks from "./NavLinks";
const Navbar = () => {
const linksData=[
  {
    href:'/',
    text:'Home'
  },
  {
    href:'/allapps',
    text:'Apps'
  },
  {
    href:'/installation',
    text:'Installation'
  }
]
  
  return (
    <div className="navbar container mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {linksData.map((data,ind)=><NavLinks key={ind} href={data.href} text={data.text}></NavLinks>)}
          </ul>
        </div>
        <div className="flex gap-1 items-center">
          <Image src={logo} alt="logo image" width={40} height={40} />
          <p className="font-bold text-">Hero.io</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-center items-center gap-3">
          {linksData.map((data,ind)=><NavLinks key={ind} href={data.href} text={data.text}></NavLinks>)}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">
          <FaGithub /> Contributed
        </a>
      </div>
    </div>
  );
};

export default Navbar;
