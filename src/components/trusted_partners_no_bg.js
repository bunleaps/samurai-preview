import React from "react";
import Image from "next/image";
import TitleLine from "./title_line";

function TrustedPartners() {
  const logoList = [
    { name: "iTernity", src: "/iTernity.svg", width: 180, height: 40 },
    { name: "Zscaler", src: "/Zscaler.svg", width: 180, height: 40 },
    { name: "Dilato", src: "/Dilato.svg", width: 180, height: 40 },
    { name: "Palo Alto Network", src: "/PAN.svg", width: 180, height: 40 },
  ];

  return (
    <div className="py-16 flex flex-col items-center gap-4">
      <TitleLine title="Ecosystem Partners" />
      <h1 className="text-3xl font-bold tracking-wide">
        Trusted By Ecosystem Partners
      </h1>
      <p className="w-1/3 text-sm text-center">
        High-profile companies are utilizing Samur AI to build great business
        networks, reach out to new clients, and secure meetings with
        decision-makers and candidates.
      </p>
      <div className="mt-4 flex justify-center gap-4">
        {logoList.map((logo) => (
          <Image
            className="mx-3"
            key={logo.name}
            src={"/logoList" + logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
          />
        ))}
      </div>
    </div>
  );
}

export default TrustedPartners;
