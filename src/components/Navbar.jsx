import Image from 'next/image';
import logo from '../assets/images/logo.png'
import { FaGithub } from "react-icons/fa6";
const Navbar = () => {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Apps</a>
      </li>
      <li>
        <a>Installation</a>
      </li>
    </>
  );
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
            {links}
          </ul>
        </div>
        <div className='flex gap-1 items-center'>
            <Image
            src={logo}
            alt='logo image'
            width={40}
            height={40}
            />
            <p className='font-bold text-'>Hero.io</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn"><FaGithub/> Contributed</a>
      </div>
    </div>
  );
};

export default Navbar;
