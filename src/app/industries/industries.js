import React from "react";
import TitleLine from "@/components/title_line";
import IconCard from "@/components/icon_card";
import { MdOutlineBiotech } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { GiOilPump } from "react-icons/gi";

function IndustriesInfo() {
  const cardsInfo = [
    {
      title: "High Tech",
      description:
        "That's what drives us as a custom software design and development company",
      icon: <MdOutlineBiotech />,
    },
    {
      title: "Healthcare",
      description:
        "That's what drives us as a custom software design and development company",
      icon: <MdHealthAndSafety />,
    },
    {
      title: "Oil & Gas",
      description:
        "That's what drives us as a custom software design and development company",
      icon: <GiOilPump />,
    },
  ];

  return (
    <div className="mt-28 mb-16 flex flex-col items-center gap-4">
      <TitleLine title="Industries" />
      <h1 className="text-3xl font-bold tracking-wide">
        Providing Cyber Security to Help
      </h1>
      <p className="w-1/3 text-sm text-center">
        Source Point Delivers Next Generation Technology Services Designed To
        Optimize Your Business Via Secure & Redundant Cloud-based
        Infrastructure.
      </p>
      <div className="w-3/5 mt-4 flex justify-around gap-8">
        {cardsInfo.map((cardInfo) => (
          <IconCard
            key={cardInfo.title}
            title={cardInfo.title}
            description={cardInfo.description}
            icon={cardInfo.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default IndustriesInfo;
