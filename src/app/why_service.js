import React from "react";
import TitleLine from "@/components/title_line";
import IconCardButton from "@/components/icon_card_button";
import { MdSecurity } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoBugSharp } from "react-icons/io5";

function WhyService() {
  const cardsInfo = [
    {
      title: "Network Protections",
      description:
        "Solve emerging workforce needs with headsets that combine commercial quality with consumer design.",
      icon: <MdSecurity />,
    },
    {
      title: "Server Protections",
      description:
        "Solve emerging workforce needs with headsets that combine commercial quality with consumer design.",
      icon: <AiFillSafetyCertificate />,
    },
    {
      title: "Vulnerability Assessment",
      description:
        "Solve emerging workforce needs with headsets that combine commercial quality with consumer design.",
      icon: <IoBugSharp />,
    },
    {
      title: "SPAM Protections",
      description:
        "Solve emerging workforce needs with headsets that combine commercial quality with consumer design.",
      icon: <MdSecurity />,
    },
    {
      title: "Secure Transactions",
      description:
        "Solve emerging workforce needs with headsets that combine commercial quality with consumer design.",
      icon: <AiFillSafetyCertificate />,
    },
    {
      title: "Antivirus",
      description:
        "Solve emerging workforce needs with headsets that combine commercial quality with consumer design.",
      icon: <IoBugSharp />,
    },
  ];

  return (
    <div className="my-16 flex flex-col items-center gap-4">
      <TitleLine title="Why Services" />
      <h1 className="text-3xl font-bold tracking-wide">
        Our High-Performance Services
      </h1>
      <p className="w-1/3 text-sm text-center">
        Source Point Delivers Next Generation Technology Services Designed To
        Optimize Your Business Via Secure & Redundant Cloud-based
        Infrastructure.
      </p>
      <div className="w-3/5 mt-4 flex flex-wrap justify-center gap-8">
        {cardsInfo.map((cardInfo) => (
          <IconCardButton
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

export default WhyService;
