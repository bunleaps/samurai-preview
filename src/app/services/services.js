import React from "react";
import TitleLine from "@/components/title_line";
import ServiceCard from "./service_card";

function ServicesInfo() {
  const cardsInfo = [
    {
      text: "Cyber Threat Intelligence",
    },
    {
      text: "Malware Removal",
    },
    {
      text: "24/7 Online Support",
    },
  ];

  return (
    <div className="mt-28 mb-16 flex flex-col items-center gap-4">
      <TitleLine title="Our Services" />
      <h1 className="text-3xl font-bold tracking-wide">
        We Manage Security Services
      </h1>
      <p className="w-1/3 text-sm text-center">
        Source Point Delivers Next Generation Technology Services Designed To
        Optimize Your Business Via Secure & Redundant Cloud-based
        Infrastructure.
      </p>
      <div className="w-3/5 mt-4 flex justify-around gap-8">
        {cardsInfo.map((cardInfo) => (
          <ServiceCard key={cardInfo.text} text={cardInfo.text} />
        ))}
      </div>
    </div>
  );
}

export default ServicesInfo;
