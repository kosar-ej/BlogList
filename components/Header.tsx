import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/logo.png";

const Header = () => {
  return (
    <nav className="w-full bg-white px-3 py-2 flex gap-5 shadow-lg rounded">
      <div className="flex gap-2 items-center">
        <Image
          src={Logo}
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <h2 className="text-purple text-xl font-bold">Blogs</h2>
      </div>
      <div className="flex gap-3 items-center">
        <Link href="/">
          <span className="text-gray-700 text-sm font-normal">Home</span>
        </Link>

        <Link href="/blog/create">
          <span className="text-gray-700 text-sm font-normal ">Create</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
