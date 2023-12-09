import React from "react";
import TitleLine from "@/components/title_line";
import Image from "next/image";

function PartnersInfo() {
  const logoList = [
    { name: "iTernity", src: "/iTernity.svg", width: 180, height: 40 },
    { name: "Zscaler", src: "/Zscaler.svg", width: 180, height: 40 },
    { name: "Dilato", src: "/Dilato.svg", width: 180, height: 40 },
    { name: "Palo Alto Network", src: "/PAN.svg", width: 180, height: 40 },
  ];

  return (
    <div className="mt-28 mb-48 flex flex-col items-center gap-4">
      <TitleLine title="Our Partners" />
      <h1 className="text-3xl font-bold tracking-wide">
        A Few Of Our Sponsors
      </h1>
      <p className="w-1/3 text-sm text-center">
        Source Point Delivers Next Generation Technology Services Designed To
        Optimize Your Business Via Secure & Redundant Cloud-based
        Infrastructure.
      </p>
      <div className="w-3/5 mt-4 grid grid-cols-4 border rounded-lg border-primary overflow-hidden">
        {logoList.map((logo, index) => (
          <div
            key={logo.name}
            className={`flex items-center justify-center p-16 border bg-[#192230] border-primary backdrop-blur aspect-w-1 aspect-h-1 ${
              index % 4 !== 0 ? "border-l-0" : ""
            }`}
          >
            <Image
              className="object-contain h-full w-full"
              src={"/logoList" + logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnersInfo;
