import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#060050]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width="60" height="60" />
        </Link>
        {/* space */}
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:underline">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:underline">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:underline">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:underline">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:underline">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
