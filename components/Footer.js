import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo3img from "../public/assets/logo3.png";

const Footer = () => {
  return (
    <div className="fixed flex flex-row justify-around text-center bottom-0 w-full h-fit pt-3 pb-3 bg-black text-white ">
      <Image src={logo3img} height={"35px"} width={"35px"} alt={"log3.jpg"} />
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
    </div>
  );
};

export default Footer;
