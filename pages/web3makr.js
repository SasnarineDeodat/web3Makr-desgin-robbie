import Image from "next/image";
import React from "react";

import Baseimg from "../public/assets/Base.png";
import Ellipseimg from "../public/assets/Ellipse.png";
import Ellipse17img from "../public/assets/Ellipse17.png";
import Ellipse18img from "../public/assets/Ellipse18.png";
import Pathimg from "../public/assets/Path.png";
import Rectangleimg from "../public/assets/Rectangle.png";
import screenimg from "../public/assets/screen.png";

const Web3makr = () => {
  return (
    <div className="flex flex-col  items-center justify-center  w-full h-full ">
      <div className="  items-center justify-center  w-full h-full place-content-center">
        <Image
          src={Rectangleimg}
          height={"1200px"}
          width={"2000px"}
          alt={"Ellipseimg"}
        />
      </div>
      <div className="absolute left-0 top-0 py-14   ">
        <Image
          src={Ellipseimg}
          height={"700px"}
          width={"700px"}
          alt={"Ellipseimg"}
        />
      </div>
      <div className="  bottom-96  py-0 object-center md:object-bottom space-y-1 sticky ">
        <Image
          src={Ellipse17img}
          height={"720px"}
          width={"720px"}
          alt={"Ellipseimg"}
        />

        <div className=" absolute w-full h-full  bottom-20  top-20 text-right  left-56 object-left-top m-44">
          <Image
            src={Ellipse18img}
            height={"820px"}
            width={"820px"}
            alt={"screen.png"}
          />
        </div>
        <h1 className="absolute  top-0 p-40 py-40  mt-20 text-center font-bold text-5xl truncate    text-white">
          Web3Makr Redifining
          <p className=" text-5xl text-white font-bold pb-3">How You Create</p>
          <p className="text-sm">Unlock the blockchain potential to create</p>
          <p className="text-3xl ">Web3 Applications</p>
          <div className="  justify-center items-center content-evenly inset-0 ">
            <Image
              src={Pathimg}
              height={"20px"}
              width={"20px"}
              alt={"screen.png"}
            />
            <div className="  justify-center items-center content-evenly inset-0 pb-40 mb-12 t ">
              <Image
                src={Baseimg}
                height={"50px"}
                width={"50px"}
                alt={"screen.png"}
              />
            </div>
          </div>
        </h1>
      </div>

      <div className="absolute pb-60 ">
        <Image
          src={screenimg}
          height={"420px"}
          width={"720px"}
          alt={"screen.png"}
        />
      </div>
      {/* second page */}
      {/* <div className="">
        <div className="absolute ">
          <Image
            src={screenimg}
            height={"420px"}
            width={"720px"}
            alt={"screen.png"}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Web3makr;
