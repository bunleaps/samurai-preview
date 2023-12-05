import React from "react";
import TitleLine from "@/components/title_line";
import IconCard from "@/components/icon_card";
import { MdSecurity } from "react-icons/md";

function WhyUs() {
  const cardsInfo = [
    {
      title: "Privacy Protection",
      description:
        "Solve emerging workforce needs with headsets that combine commercial quality with consumer design.",
      icon: <MdSecurity />,
    },
    {
      title: "Privacy Protection",
      description:
        "Solve emerging workforce needs with headsets that combine commercial quality with consumer design.",
      icon: <MdSecurity />,
    },
    {
      title: "Privacy Protection",
      description:
        "Solve emerging workforce needs with headsets that combine commercial quality with consumer design.",
      icon: <MdSecurity />,
    },
  ];

  return (
    <div className="mt-28 mb-16 flex flex-col items-center gap-4">
      <TitleLine title="Why Choose Us" />
      <h1 className="text-3xl font-bold tracking-wide">
        We Advise More Than 1700 Companies
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

export default WhyUs;
