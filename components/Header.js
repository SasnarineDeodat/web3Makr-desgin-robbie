import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo3img from "../public/assets/logo3.png";

const Header = () => {
  return (
    <div className="flex flex-row justify-around bg-black text-white pt-3 pb-3 hover:bg-black">
      <Image src={logo3img} height={"35px"} width={"35px"} alt={"log3.png"} />
      <Link href="/">
        <a>Web3makr</a>
      </Link>
      <Link href="/whilepaper">
        <a>While Paper</a>
      </Link>
      <Link href="/services">
        <a>Services</a>
      </Link>
      <Link href="/tool">
        <a>Tool</a>
      </Link>
      <Link href="/contactus">
        <a>Contact Us</a>
      </Link>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 text-sm px-1 rounded">
        Start for free
      </button>
    </div>
  );
};

export default Header;
