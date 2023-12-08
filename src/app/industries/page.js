import React from "react";
import Hero from "./hero";
import IndustriesInfo from "./industries";
import Info from "./info";
import TrustedPartners from "@/components/trusted_partners";

function Industries() {
  return (
    <div>
      <Hero />
      <IndustriesInfo />
      <Info />
      <TrustedPartners />
    </div>
  );
}

export default Industries;
