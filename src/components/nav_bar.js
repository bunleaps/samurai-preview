import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const navigation = [
    "Home",
    "Solution",
    "Services",
    "Industries",
    "Partners",
    "Company & Code",
  ];

  return (
    <div className="w-full fixed z-50">
      <div className="p-2 text-sm text-center bg-gradient-to-r from-cyan-500 to-blue-700">
        Cybersecurity, Intelligence, Technology. Living by the Code.
      </div>
      <nav className="flex justify-center backdrop-blur-xl shadow">
        <div className="w-3/4 py-4 flex justify-between items-center">
          <Image
            src="logo.svg"
            alt="SamurAi Logo"
            width={165}
            height={52}
            priority={true}
          />
          <ul className="flex items-center gap-12 tracking-wide">
            {navigation.map((nav) => (
              <li
                key={nav}
                className="cursor-pointer hover:border-b-4 hover:border-primary"
              >
                {nav}
              </li>
            ))}
            <button className="text-secondary bg-primary rounded-full px-10 py-3">
              Sign In
            </button>
            <CiSearch className="text-2xl" />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
