import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        className="object-cover brightness-50 "
        src="/bg/company_bg.png"
        alt="bg cover"
        fill
      />
      <div className="bg-gradient-to-b from-transparent to-secondary z-10 absolute inset-0 flex justify-center items-center">
        <div className="w-2/3">
          <div className="text-5xl font-bold flex items-center">
            Our
            <h1 className="shadow bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent p-2">
              Company & Code
            </h1>
          </div>
          <p className="w-1/2">
            Source Point Delivers Next Generation Technology Services Designed
            To Optimize Your Business Via Secure & Redundant Cloud-based
            Infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
